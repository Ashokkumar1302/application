           
import React, { useState } from 'react';
import { Card, CardActions, CardContent, Container, Typography, Button } from '@material-ui/core';
import { Heading } from 'components';

// Mock data
const initialProducts = [
  { name: 'Product 1', category: 'Category 1', price: 100, quantity: 10 },
  { name: 'Product 2', category: 'Category 2', price: 200, quantity: 20 },

];

const ProductsManagementPage = () => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (name) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.name !== name));
  };

  // Example function to update product details (you can customize this)
  const updateProduct = (name, updatedDetails) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === name ? { ...product, ...updatedDetails } : product
      )
    );
  };

  return (
    <Container style={{ backgroundColor: '#F2E6FF', height: 'full',borderRadius:'1rem' }}>
      <Heading>
        <meta name="description" content="Web site created using create-react-app" />
      </Heading>

      <Typography variant="h2" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Product Management
      </Typography>

      {products.map((product, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#E3F1EF' }}>
            <Typography variant="h5" component="h2">
             Product
            </Typography>
            <Typography variant="h5" component="h2">
            <th>
            Name:
                <td style={{ color: "GrayText" }}> {product.name}</td>
              </th>
            </Typography>
            <Typography variant="h5" component="h2">
            <th>
            Category:
                <td style={{ color: "GrayText" }}> {product.category}</td>
              </th>
            </Typography>
            <Typography variant="h5" component="h2">
            <th>
            Price:
                <td style={{ color: "GrayText" }}> {product.price}</td>
              </th>
              
            </Typography>
            <Typography variant="h5" component="h2">
            <th>
            Quantity:
                <td style={{ color: "GrayText" }}> {product.quantity}</td>
              </th>
            </Typography>
            </CardContent>
            <CardActions style={{display:'flex',justifyContent:'space-between'}}>
            <Button onClick={() => addProduct({ name: 'New Product', category: 'New Category', price: 50, quantity: 5 })}>
        Add New Product
      </Button>
            
              {/* Example: Update product price */}
              <Button onClick={() => updateProduct(product.name,{price:product.price + 10})}>
                Update Price
              </Button>
              <Button onClick={() => updateProduct(product.name,{quantity:product.quantity + 5})}>
                Update quantity
              </Button>
              <Button onClick={() => deleteProduct(product.name)}>Delete</Button>
            </CardActions>
          
        </Card>
      ))}
    </Container>
  );
};

export default ProductsManagementPage;

