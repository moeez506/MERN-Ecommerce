import React, { useEffect } from "react";
import Sidebar from './Sidebar.js'
import "./dashboard.css";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
// import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";


const Dashboard = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);


  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);



  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              {/* Total Amount <br /> ₹{totalAmount} */}
              Total Amount <br /> $2200
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
              
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
        
        <div className="lineChart">
          {/* <Line data={lineState} /> */}
        </div>

        <div className="doughnutChart">
          {/* <Doughnut data={doughnutState} /> */}
        </div>

      </div>
    </div>
  )
}

export default Dashboard