import { textAlign } from '@mui/system'
import React from 'react'
import SearchAppBar from './Header'
import { Card, CardContent, CardMedia, Grid} from "@mui/material"
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import IconButton from "@mui/material/IconButton";
import CardActionArea from '@mui/material/CardActionArea';
import Cookies from 'js-cookie';
import {Navigate} from 'react-router-dom'
function Dashboard() {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken === undefined){
        return <Navigate to ="/login"/>
    }
    return (<>
    <SearchAppBar/>
        <div>
            <h1 style={{textAlign:'center', fontWeight:'700'}}>REACT-FAST_API-COURSES-DASHBOARD</h1>
        </div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem"}}>
                   <CardMedia>
                       <img
                       src='https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       ReactJS
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem",}}>
                   <CardMedia>
                       <img
                       src='https://robots.net/wp-content/uploads/2019/11/Lozingle_10032014-1280x720.jpg'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       python
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem",}}>
                   <CardMedia>
                       <img
                       src='https://www.zdnet.com/a/img/resize/486cac744ae56e20951ec73a2ebbcb8c7c2ec454/2014/10/05/36793eae-4c32-11e4-b6a0-d4ae52e95e57/java-logo.jpg?width=1200&height=675&fit=crop&auto=webp'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       Java
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem",}}>
                   <CardMedia>
                       <img
                       src='https://allcode.com/wp-content/uploads/2021/02/Group-169-3.png'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       AWS
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem",}}>
                   <CardMedia>
                       <img
                       src='https://www.bmwgroup.com/en/innovation/technologie-und-mobilitaet/artificial-intelligence/_jcr_content/sectioncontainer/sectionparsys/layoutcontainer/layoutcontainercontent/youtube.img.jpeg/1602156939336.jpeg'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       AI
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={4} style={{padding:'0px 5%',marginBottom:'20px'}}>
                 <Card style={{ height: "20rem"}}>
                   <CardMedia>
                       <img
                       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-Bf-nKgtca80IoYP9ihO2mMTxryzKOJrCA&usqp=CAU'
                    style={{height:'10rem', width:'100%'}}
                    />
                   </CardMedia>
                   <CardContent>
                       R Programming
                   </CardContent>
                   <CardActionArea>
                       <IconButton>
                           <AddShoppingCartSharpIcon/>
                       </IconButton>
                   </CardActionArea>
                 </Card>
            </Grid>   
        </Grid>

    </>)
}

export default Dashboard
