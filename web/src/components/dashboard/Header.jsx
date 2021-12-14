import  React,{useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import history from "../history";


export default function SearchAppBar() {
  
     const onLogOut = ()=>{
         Cookies.remove("jwt_token")
         history.replace('/login')
         history.go(0)
     }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#0974AF ", height: "11vh", padding: "0px 10%" }}
      >
        <Toolbar>
        
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to='/' style={{textDecoration:"none", color:'#fff', fontWeight:'700',fontSize:'2rem'}}>
           <s>&nbsp;CoDelic.&nbsp;</s>
            </Link>
          </Typography>
        
          <div style={{ display: "flex", gap: "10rem" }}>
            {/* <Button style={{ color: "#fff" }}>courses</Button> */}
         <Link to='/cart'>
         <IconButton style={{ color: "#fff", marginRight: "100px" }}>
              <AddShoppingCartSharpIcon />
            </IconButton>
         </Link>
          </div>
           <Button style={{color:'#fff'}} onClick={onLogOut}>
              Logout
           </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
