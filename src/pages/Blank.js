import React from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui'
const Blank = () => {
    const Item = styled(Paper)(({ theme }) => ({
        
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const data = [
        {  y: 300 },
        { x: "sun", y:200 },
        { x: "tue", y: 100 },
        { x: "wed", y: 200 },
        { x: "thur", y: 300 },
        {x:"fri",y:200}
,{x:"sat",y:100}      ];
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
  return (
    
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h5 style={{fontWeight:"normal" ,color:"#3f4d4d"}}>Welcome Back,</h5>
               <h1 style={{color:"#3f4d4d"}}>Lucy Lure</h1>
            </div>
            <div class="col-sm">
                <Button variant="contained" sx={{backgroundColor:"#3c2eff"}}><i class='bx bx-upload'></i> Upload Product</Button>
            </div>
            <div class="col-sm">
                {/* <i class='bx bx-search-alt-2'></i> */}
                <input type="text" placeholder='Search' />
                <Badge badgeContent={2} color="primary" sx={{paddingLeft:"30px"}}>
                    <CircleNotificationsIcon color="action"  sx={{width:"30px"}}/>
                </Badge>
            </div>
        </div>
        <div class="grid-container">
            <div class="grid-item item1">
                    <Card sx={{ display: 'flex',width:"100%",height:"100%",backgroundColor:"#25eaf5",borderRadius:"20px",marginRight:"20px"}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" sx={{color:"white"}}>
                                Want Some Extra 
                            </Typography>
                            <Typography variant="subtitle1" component="div" sx={{color:"white"}}>
                                Money?
                            </Typography>
                            <Typography variant="subtitle1" component="div" sx={{color:"white",fontSize:"small"}}>
                                Refer a friend and earn 10% <br/>commission on every referal
                            </Typography>
                            <Button sx={{backgroundColor:"white",marginTop:"20px"}}>Refferal Program</Button>
                            </CardContent>
                        </Box>
                    </Card>
            </div>
            <div class="grid-item item2">
                    <Card sx={{borderRadius:"20px",height:"100%"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:"bold",marginBottom:"20px"}} color="text.secondary" gutterBottom>
                                Total Products
                                </Typography>
                                <Stack spacing={2}>
                                    <Item>Niky - icon 3D Pack <br/> 3D illustrations <i icon="fa-solid fa-greater-than" /></Item>
                                    <Item>Lika - 3D Abstract <br/> 3D illustrations</Item>
                                    <Item>Cube 3D  <br/> 3D illustrations</Item>
                                    <Item>Heady - 3D Head <br/> 3D illustrations</Item>
                                    <Item>Astra illustrations <br/> illustrations</Item>
                                </Stack>
                            </CardContent>  
                    </Card>
            </div>
            <div class="grid-item item3">
                    <Card sx={{width:"100%",marginTop:"30px",borderRadius:"20px"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:"bold",marginBottom:"20px"}} color="text.secondary" gutterBottom>
                                Total Product
                                </Typography>
                                <Typography variant="h5" component="div" sx={{marginBottom:"10px"}}>
                                1,134 items
                                </Typography>
                                <Typography variant="h5" component="div" sx={{marginBottom:"10px",fontSize:"12px",color:"green"}}>
                                +10% this week
                                </Typography>
                            </CardContent>  
                    </Card>
            </div>  
            <div class="grid-item item4">
                    <Card sx={{width:"100%",marginTop:"30px",borderRadius:"20px"}}>
                                <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:"bold",marginBottom:"20px"}} color="text.secondary" gutterBottom>
                                Total Earning
                                </Typography>
                                <Typography variant="h5" component="div" sx={{marginBottom:"10px"}}>
                                $4,231 
                                </Typography>
                                <Typography variant="h5" component="div" sx={{marginBottom:"10px",fontSize:"12px",color:"red"}}>
                                -22% this week
                                </Typography> 
                                </CardContent>
                     </Card>
            </div>
            <div class="grid-item item5">
                <Card sx={{width:"100%",marginTop:"30px",borderRadius:"20px",height:"60%"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18,fontWeight:"bold",marginBottom:"20px"}} color="text.secondary" gutterBottom>
                                Latest Download
                        </Typography>
                        <Chart
                                    data={data} 
                                    sx={{height:"250px"}}
                                    >
                            <ArgumentAxis class="chart"/>
                            <ValueAxis />
                                
                            <LineSeries valueField="y" argumentField="x" />
                        </Chart>
                    </CardContent>  
                </Card>
            </div>
            <div class="grid-item item6">
            <Card sx={{borderRadius:"20px",height:"60%",marginTop:"30px"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18,fontWeight:"bold",marginBottom:"20px"}} color="text.secondary" gutterBottom>
                                Balances
                                </Typography>
                                <Typography variant="h5" component="div" sx={{marginBottom:"10px"}}>
                                &emsp;&emsp;$537&emsp;&emsp;&emsp;<div class = "vertical"></div>&emsp;&emsp;$234
                                </Typography>
                                <Stack direction="row" spacing={15}>
                                    <Chip label="Available" sx={{marginLeft:"30px",color:"green"}} />
                                    <Chip label="Pending"  sx={{color:"red"}}/>
                                </Stack>
                                <Button variant="contained" sx={{backgroundColor:"#3c2eff",marginTop:"100px",marginLeft:"90px"}}>Withdraw Money</Button>
                            </CardContent>  
                    </Card>
            </div>
        </div>
</div>
  )
}

export default Blank