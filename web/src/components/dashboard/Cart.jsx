import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import SearchAppBar from "./Header";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import IconButton from "@mui/material/IconButton";
import CardActionArea from "@mui/material/CardActionArea";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import CartItem from './CartItem';


function Cart() {
    const[fav,setFav]=useState([])
    
    useEffect(()=>{
        const myToken = Cookies.get("jwt_token");
        console.log(myToken)
        const options = {  
            method: "GET",
            headers:{
                "Content-Type":"application/json",
                'Access-Control-Allow-Origin':"*",
                "Authorization": "Bearer " + myToken
            } 
        }
        fetch('http://127.0.0.1:8000/favourite',options)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setFav(data);
        });
    },[])
    console.log(fav)
  
    return (<>
    <SearchAppBar/>
    <div style={{background:'#95D6F9', height:'100%', display:'flex', flexWrap:'wrap'}}>
         {
             fav.map((item)=>{
              return(
                  <CartItem cod={item} key={item.id} />
              )
             })
         }
    </div>
    
    </>
    )
}

export default Cart
