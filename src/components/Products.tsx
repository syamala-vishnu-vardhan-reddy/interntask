import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Container,
  Box,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { addToCart } from "../redux/slices/cartSlice";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories from products
  const categories = [
    "all",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);

  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: "center", mt: 10 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mt: 4, mb: 2 }}
      >
        Products
      </Typography>

      {/* Category Filter */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Product Grid (3 per row) */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            {" "}
            {/* 3 cards per row */}
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: "contain", pt: 2 }}
                image={product.image}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ minHeight: 60, overflow: "hidden" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ minHeight: 50, overflow: "hidden" }}
                >
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...product,
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
