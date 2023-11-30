import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Main() {
    return (
        <main className="main">
            <Container
                sx={{
                    height: '100vh',
                    
                    p: 0,
                    maxWidth: { xs: '100%', md: '1650px' },
                    
                }}
            >

                <Grid container sx={{ overflowX: 'auto',  }}>
                    <Grid container className='' gap={7}  sx={{
                        mt:1,
                        bgcolor: '#ffff',
                        minHeight: '14vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: '#000',
                        overflowX: 'auto',
                        minheight: '14vh',
                        justifyContent: 'center'
                        , flexWrap: 'nowrap',
                        '@media (max-width: 600px)': {
                            justifyContent: 'initial',
                            fontSize:'14px',
                            marginTop:'0px'
                           
                        },
                    }}>
                        <Grid item xs='auto'sx={{'@media (max-width: 600px)': {
                            marginLeft:'45px',
                            
                           
                        }}} >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' ,textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Grocery</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' variant="subtitle1" gutterBottom>
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Mobile</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Fashion</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' sx={{'@media (max-width: 600px)': {
                            marginLeft:'10px',
                            
                           
                        }}}>
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Electronic</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' className='' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign:'center', display: 'block'}}>
                                <img alt='gro_img' className='' src='https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Home & Furniture</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Appliances</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Travel</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Beauty, Toys & More</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000',textAlign:'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span style={{fontWeight:500}}>Two Wheelers</span>
                                </div>
                            </a>
                        </Grid>
                    </Grid>




                </Grid>

            </Container>
        </main>
    )
}
