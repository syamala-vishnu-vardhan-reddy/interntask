import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2c3e50",
        color: "#ffffff",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link
              href="/products"
              color="inherit"
              underline="none"
              display="block"
            >
              Products
            </Link>
            <Link href="/cart" color="inherit" underline="none" display="block">
              Cart
            </Link>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sm={4} textAlign="right">
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@shopapp.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Shopping App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
