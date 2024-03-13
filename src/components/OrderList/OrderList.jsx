import "./order.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Ordersdata";
import { useState } from "react";

const OrderList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      
      field: "action",
      headerName: "Action",
      width: 100,
      
      renderCell: (params) => {
        return (
          <div className="cellAction">
          
           
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="orderlist">
      <div className="datatableTitle">
        Order List
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default OrderList;