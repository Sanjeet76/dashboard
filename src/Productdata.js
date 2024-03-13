export const userColumns = [
    { field: "id", headerName: "Product id", width:150 },
    {
      field: "product",
      headerName: "Product Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 100,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  export const userRows = [
    {
      id: 2115945,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2115946,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2124945,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "disable",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2115955,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2117945,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2125945,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2145645,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "pending",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2115985,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2195955,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "disable",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2415955,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2135245,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "pending",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
    {
      id: 2126945,
      product: "Mackbook",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "available",
      category: "laptop",
      price:"$900",
      discount:"20%",
      quantity:"40",
      
    },
  ]