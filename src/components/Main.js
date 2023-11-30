import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Main() {
    return (
        <main className="main">
            <Container
                sx={{
                    height: '100vh',
                    mt: 1,
                    p: 0,
                    maxWidth: { xs: '100%', md: '1650px' },
                    '@media (max-width: 600px)': {
                        
                        marginTop:'0px'
                    }
                }}
            >

                <Grid container sx={{ overflowX: 'auto', }}>
                    <Grid container className='a_tbdr' gap={8} spacing={1} sx={{
                        bgcolor: '#ffff',
                        minHeight: '16vh',
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
                           
                        },
                    }}>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' , }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Grocery</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Mobile</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Fashion</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Electronic</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Home & Furniture</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Appliances</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Travel</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Beauty, Toys & More</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <span>Two Wheelers</span>
                                </div>
                            </a>
                        </Grid>
                    </Grid>




                </Grid>

            </Container>
        </main>
    )
}
