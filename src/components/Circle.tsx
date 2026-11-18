import React from "react";
import structures from "../data";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Circle() {
    return (
        <Container maxWidth = 'xl'>
            <Grid container spacing={4} sx={{mb: '40px'}}>
                { structures.map((item, index)=>  (
                    <Grid 
                        size={{ xs: 12, sm: 6, md: 2.4 }} 
                        key={index} 
                        sx={{ textAlign: 'center' }}                        
                    >
                        <Avatar 
                            src = {item.img} 
                            sx={{
                                width: 120,
                                height: 120,
                                mx: 'auto',
                                mb: 2,
                                border: '2px solid #eee'
                        }}/>
                        <Typography variant='h6' sx={{ 
                            fontWeight: 'bold', 
                            fontFamily: '"Reggae One", cursive',
                            color: 'white', 
                            mixBlendMode: 'difference' 
                            }}>
                            {item.title}
                        </Typography>
                        <Typography variant='body2' sx={{
                            fontFamily: 'sans-serif',
                            fontStyle: 'italic',
                            color: 'white', 
                            mixBlendMode: 'difference' 
                        }}>
                            {item.tagline}
                        </Typography>
                        <Button variant = "contained" sx={{ bgcolor: '#00a876'}}>
                            подробнее
                        </Button>
                    </Grid>
                )) }
            </Grid>
        </Container>
    );
}
export default Circle