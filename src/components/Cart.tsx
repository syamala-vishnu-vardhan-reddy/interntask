import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Container,
  CardMedia,
} from "@mui/material";
import { RootState } from "../redux/store";
import axios from "axios";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const [cartData, setCartData] = useState(null);

  console.log(cartData);

  // Fetch cart data from the API (optional)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/carts/1");
        setCartData(response.data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  }, []);

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mt: 4, mb: 2 }}
      >
        Cart
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {/* Product Image */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 60, height: 60, objectFit: "contain", mr: 2 }}
            />

            {/* Product Details */}
            <ListItemText
              primary={item.title}
              secondary={`$${item.price} x ${item.quantity}`}
              sx={{ flexGrow: 1 }}
            />

            {/* Quantity Input */}
            <TextField
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Math.max(1, parseInt(e.target.value) || 1), // Prevents negative values
                  })
                )
              }
              sx={{ width: 70, mr: 2 }}
              inputProps={{ min: 1 }}
            />

            {/* Remove Button */}
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Total Price */}
      <Typography variant="h6" align="right" sx={{ mt: 2 }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
    </Container>
  );
};

export default Cart;
