import React, { useEffect, useState } from "react";
import SearchAppBar from "./Header";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import IconButton from "@mui/material/IconButton";
import CardActionArea from "@mui/material/CardActionArea";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  grid: {
 border:'1px solid black'
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
}));

function Dashboard() {
  const [cousre, setCourse] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/course")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }, []);
  console.log(cousre);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <SearchAppBar />
      <div>
        <h1 style={{ textAlign: "center", fontWeight: "700" }}>
          REACT-FAST_API-COURSES-DASHBOARD
        </h1>
      </div>
      <Grid container spacing={2} className={classes.grid} >
      {cousre.map((cod, index) => {
        console.log(cod);
        return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ padding: "0px 5%", marginBottom: "20px"}}
              key={index.id}
             >
              
                <Card style={{ height: "100%" }} className={classes.card} >
                  <CardMedia>
                    <img
                      src={cod.image_url}
                      style={{ height: "10rem", width: "100%" }}
                    />
                  </CardMedia>
                  <CardContent>
                    <h3>
                      <b>{cod.course_name}</b>
                    </h3>
                    <h5>{cod.price}</h5>
                    <p>{cod.rating}</p>
                  </CardContent>
                  <CardActionArea>
                    <IconButton>
                      <AddShoppingCartSharpIcon />
                    </IconButton>
                  </CardActionArea>
                </Card>
            </Grid>
          
        );
      })}
      </Grid>
    </>
  );
}

export default Dashboard;
