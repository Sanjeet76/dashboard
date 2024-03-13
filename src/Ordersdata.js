export const userColumns = [
    { field: "id", headerName: "Tracking id", width: 100 },
    {
        field: "product",
        headerName: "Product ",
        width: 200,
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
        field: "customer",
        headerName: "Customer ",
        width: 150,
    },
    {
        field: "address",
        headerName: "Address ",
        width: 200,
    },

    {
        field: "date",
        headerName: "Date",
        width: 100,
    },
    {
        field: "d_date",
        headerName: "Delivery Date",
        width: 100,
    },
    {
        field: "amount",
        headerName: "Price",
        width: 80,
    },
    {
        field: "method",
        headerName: "Payment Method",
        width: 150,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
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
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Sanjeet Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-11",
        d_date: "2024-03-18",
        amount: '$785',
        method: "Cash on Delivery",
        status: "approved",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Manash Modi",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-15",
        d_date: "2024-03-19",
        amount: '$900',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Sanjeet Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-09",
        d_date: "2024-03-16",
        amount: '$35',
        method: "Cash on Delivery",
        status: "Pending",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Sanjeet Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-11",
        d_date: "2024-03-20",
        amount: '$920',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2342155,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-11",
        d_date: "2024-03-18",
        amount: '$2000',
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 2342955,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-08",
        d_date: "2024-03-16",
        amount: '$2000',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2562355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-08",
        d_date: "2024-03-16",
        amount: '$2000',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2322355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-12",
        d_date: "2024-03-20",
        amount: '$2000',
        method: "Online  Payment",
        status: "Pending",
    },
    {
        id: 2242955,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-09",
        d_date: "2024-03-14",
        amount: '$2000',
        method: "Online Payment",
        status: "cancel",
    },
    {
        id: 2342354,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-11",
        d_date: "2024-03-19",
        amount: '$2000',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-10",
        d_date: "2024-03-14",
        amount: '$2000',
        method: "Online Payment",
        status: "approved",
    },
    {
        id: 2342356,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kundan Kumar",
        address:"23 Vasant Kunj, New Delhi", 
        date: "2024-03-12",
        d_date: "2024-03-19",
        amount: '$2000',
        method: "Cash on Delivery",
        status: "Pending",
    },


];