import React, { useState } from "react";
import "./calenderview.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Ordersdata";

const Calendar = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState("");

  const handleApply = () => {
    onDateRangeChange(startDate);
  };

  return (
    <div className="calendar">
      <input
        className="start"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
     
      <button className="button" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

const Calenderview = () => {
  const [rows, setRows] = useState(userRows);

  const handleDateRangeChange = (startDate) => {
    filterRows(startDate);
  };

  const filterRows = (startDate) => {
    const filtered = userRows.filter((row) => {
      const deliveryDate = new Date(row.d_date);
      const selectedStartDate = new Date(startDate);
      return (
        deliveryDate.getFullYear() === selectedStartDate.getFullYear() &&
        deliveryDate.getMonth() === selectedStartDate.getMonth() &&
        deliveryDate.getDate() === selectedStartDate.getDate()
      );
    });
    setRows(filtered);
  };

  return (
    <div className="calender">
      <Calendar onDateRangeChange={handleDateRangeChange} />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={userColumns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Calenderview;
