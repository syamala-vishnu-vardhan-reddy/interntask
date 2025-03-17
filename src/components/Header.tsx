import React from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            ShopApp
          </Link>
        </Typography>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={items.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
