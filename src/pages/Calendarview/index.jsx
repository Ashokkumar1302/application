import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import { Container, colors } from '@mui/material';

// Mock data
const orders = [
  { orderID: '1', customerName: 'Customer 1', deliveryDate: new Date(2024, 1, 1), status: 'Processing' },
  { orderID: '2', customerName: 'Customer 2', deliveryDate: new Date(2024, 1, 2), status: 'Shipped' },
  { orderID: '3', customerName: 'Customer 3', deliveryDate: new Date(2024, 1, 3), status: 'Delivered' },
  { orderID: '4', customerName: 'Customer 4', deliveryDate: new Date(2024, 8, 3), status: 'Delivered' },
  { orderID: '5', customerName: 'Customer 5', deliveryDate: new Date(2024, 8, 3), status: 'Delivered' },
  { orderID: '6', customerName: 'Customer 6', deliveryDate: new Date(2024, 3, 8), status: 'Delivered' },

  // Add more orders as needed
];
const OrderCalendarView = () => {
    
  const [value, onChange] = useState(new Date());

  const [ordersForSelectedDate, setOrder] = useState([])

    // const ordersForSelectedDate =

   const handleDateChange = (date) => {
    console.log((new Date(date)).toDateString())
    // console.log((orders[0].deliveryDate).toDateString())

   let x=  orders.filter(order => order.deliveryDate.toDateString() === (new Date(date)).toDateString());
   console.log('order ', x)
   setOrder(x)
    console.log(ordersForSelectedDate)
    onChange(date);
    console.log("User selected date: ", date);
  };


  return (
    <Container  style={{backgroundColor: '#00FFFF'}} maxWidth="xl" sx={{ height: 'auto' }}>
    <Box display="flex" flexDirection="column" alignItems="center"  >
      <Typography variant="h2" component="h1" gutterBottom>
        Order Calendar View
      </Typography>
      <Calendar onChange={handleDateChange} value={value}/>
      {ordersForSelectedDate.length > 0 ? (
        <div  >
          <Typography variant="h5" component="h2" gutterBottom>
            Orders for {value.toDateString()}
          </Typography>
          {ordersForSelectedDate.map((order, index) => (
            <Card key={index} style={{ marginBottom: '20px' }} maxWidth="xl">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Order {order.orderID}
                </Typography>
                <Typography color="textSecondary"> 
                  Customer: {order.customerName}
                </Typography>
                <Typography color="textSecondary">
                  Status: {order.status}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Typography color="textSecondary" >
          No orders for {value.toDateString()}
        </Typography>
      )}
    </Box>
    </Container>
  );
};

export default OrderCalendarView;
