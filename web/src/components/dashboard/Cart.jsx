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

const useStyles = makeStyles(() => ({
    grid: {
      padding:'30px 1%',
      // background:'#95D6F9',
    },
    card: {
      width: "100%",
      textAlign: "left",
      BorderRadius: 5,
      overflow: "hidden",
      background:
        "linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%)",
      backgroundBlendMode: "normal,color-burn",
      backgroundClip: "border-box",
      justifyContent: "center",
      transition: "0.4s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)",
      },
    },
    search: {
      height: "40px",
      width: "50%",
      padding: "20px",
      margin: "20px 25px",
      border: "1px solid",
      color: "#000",
      fontSize: "18px",
      fontFamily: "'Courier New', Courier, monospace",
      fontWeight: "normal",
      borderRadius:'20px',
    },
  }));

function Cart() {
    const classes = useStyles();
    const[fav,setFav]=useState([])
    
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/favourite')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setFav(data);
        });
    },[])
    console.log(fav)
    const filData = fav.filter((c,i)=>{
        return c.course_id== c.user_id;
    })
    console.log(filData)
  
    return (<>
    <SearchAppBar/>
    <div style={{background:'#95D6F9', height:'150vh'}}>
    <Grid container spacing={2} className={classes.grid}>
        {filData.map((cod, index) => {
          console.log(cod);
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ padding: "0px 5%", marginBottom: "20px" }}
              key={index.id}
            >
              <Card style={{ height: "100%" }} className={classes.card}>
                <CardMedia>
                  <img
                    src={cod.image_url}
                    style={{ height: "7rem", width: "17rem",padding:'10px 10px' }}
                  />
                </CardMedia>
                <CardContent>
                  <h3 style={{textAlign:'center'}}>
                    <b>{cod.course_name}</b>
                  </h3>
                  <hr style={{ height: "0.5px", width: "100%" }} />
                  <h5><b>Price :</b>${' '}{cod.price}</h5>
                  <p><b>Rating :</b>{' '}{cod.rating}/5</p>
                </CardContent>
                <CardActionArea style={{padding:'0px 3%'}}>
              <Link to='/'>
              <Tooltip title='Delete ?' arrow>
                 <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                 </Tooltip>
              </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
    
    </>
    )
}

export default Cart
