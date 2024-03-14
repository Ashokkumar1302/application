// import React, { useState } from 'react';
//import { Helmet } from 'react-helmet';
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useState } from "react";
import { Heading } from "components";


//import { createEvent } from "@testing-library/react";

// Mock data
const initialOrders = [
  {
    orderID: "1",
    customerName: "Customer 1",
    orderDate: "2024-01-01",
    status: "Processing",
  },
  {
    orderID: "2",
    customerName: "Customer 2",
    orderDate: "2024-01-02",
    status: "Shipped",
  },
  {
    orderID: "3",
    customerName: "Customer 3",
    orderDate: "2024-01-03",
    status: "Delivered",
  },
  {
    orderID: "4",
    customerName: "Customer 4",
    orderDate: "2024-03-08",
    status: "Delivered",
  },
  {
    orderID: "5",
    customerName: "Customer 5",
    orderDate: "2024-03-08",
    status: "Delivered",
  },
  {
    orderID: "6",
    customerName: "Customer 6",
    orderDate: "2024-03-08",
    status: "Delivered",
  },

  // Add more orders as needed
  // Add more orders as needed
];

const OrderManagementPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateOrder = (orderID, status) => {
    setOrders(
      orders.map((order) =>
        order.orderID === orderID ? { ...order, status } : order
      )
    );
  };

  const deleteOrder = (orderID) => {
    setOrders(orders.filter((order) => order.orderID !== orderID));
  };
       
  return (
    <Container style={{ backgroundColor: "#F2E6FF"} } 
     >
        
      <Heading>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Heading>
      {/* <title>Order Management</title>
        <meta name="description" content="Web site created using create-react-app" /> */}

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        style={{ textAlign: "center" }}
      >
        Order Management
      </Typography>
      {orders.map((order, index) => (
        <Card key={index} style={{ marginBottom: "20px",borderRadius:"1rem"}}>
          <CardContent
            style={{ display: "flex", justifyContent: "space-between", backgroundColor:"#E3F1EF" }}
          >
            <Typography variant="h5" component="h2">
              <th>
                Order Id
                <td style={{ color: "GrayText" }}>{order.orderID}</td>
              </th>
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondry">
              <th>
                Customer Name
                <td style={{ color: "GrayText" }}>{order.customerName}</td>
              </th>
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondry">
              <th>
                Date
                <td style={{ color: "GrayText" }}> {order.orderDate}</td>
              </th>
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondry">
            <th>
            Status
                <td style={{ color: "GrayText" }}> {order.status}</td>
              </th>
              
            </Typography>
           
          </CardContent>

          <CardActions style={{ display:"flex" ,justifyContent:'space-between'}}>
            <Button 
              size="small"
              color="primary"
              onClick={() => updateOrder(order.orderID, "New Status")}
            >
              Update Order
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => deleteOrder(order.orderID)}
            >
              Delete Order
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default OrderManagementPage;
