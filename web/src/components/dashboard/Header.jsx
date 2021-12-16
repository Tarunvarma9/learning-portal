import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import history from "../history";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Fade,Bounce } from "react-awesome-reveal";

export default function SearchAppBar() {
  const settings = ["Logout"];
  const onLogOut = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
    history.go(0);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#fff", height: "13vh", padding: "0px 10%" }}
      >
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Bounce>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "2rem",
              }}
            >
              <s>&nbsp;CoDelic.&nbsp;</s>
            </Link>
            </Bounce>
          </Typography>
      

          <div style={{ display: "flex", gap: "10rem" }}>
            {/* <Button style={{ color: "#fff" }}>courses</Button> */}
            <Link to="/cart">
              <IconButton style={{ color: "#000", marginRight: "100px" }}>
                <AddShoppingCartSharpIcon />
              </IconButton>
            </Link>
          </div>
          {/* <Button style={{color:'#000'}} onClick={onLogOut}>
              Logout
           </Button>
            */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" style={{background:'#ccc' ,color:'#fff'}}>&#128373;</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div onClick={handleCloseNavMenu}>
                <Button style={{ color: "#000" }} onClick={onLogOut}>
                  Logout
                </Button>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
