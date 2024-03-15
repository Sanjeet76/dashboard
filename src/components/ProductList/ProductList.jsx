
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Productdata";
import "./product.css";
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <Link to={`/products/edit/${params.row.id}`} className="editButton" style={{textDecoration:"none"}}>Edit</Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">Add New</Link>
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

export default ProductList;
