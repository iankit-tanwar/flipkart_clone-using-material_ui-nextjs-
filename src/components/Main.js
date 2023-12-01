'use client'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





export default function Main() {


    const CustomLeftArrow = (props) => (
        <div
            {...props}
            style={{ ...props.style, left: '10px', zIndex: 1, }}
        />
    );

    const CustomRightArrow = (props) => (
        <div
            {...props}
            style={{ ...props.style, right: '10px', zIndex: 1 }}
        />
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomLeftArrow />,
        nextArrow: <CustomRightArrow />,
        appendDots: (dots) => (
            <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
                <ul style={{ margin: "0", padding: "0", textAlign: "center" }}>{dots}</ul>
            </div>
        ),
    };

    const ScrollableRow = () => {
        const containerRef = useRef(null);

        const scrollLeft = () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
            }
        };

        const scrollRight = () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
            }
        }
    }

    return (
        <main className="main">
            <Container
                sx={{
                    height: '100vh',

                    p: 0,
                    maxWidth: { xs: '100%', md: '1650px' },

                }}
            >

                <Grid container sx={{ overflowX: 'auto', }}>
                    <Grid container className='' gap={7} sx={{
                        mt: 1,
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
                            fontSize: '12px',
                            marginTop: '-10px'

                        },
                    }}>
                        <Grid item xs='auto' sx={{
                            '@media (max-width: 600px)': {
                                marginLeft: '45px',


                            }
                        }} >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Grocery</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' variant="subtitle1" gutterBottom>
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Mobile</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Fashion</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' sx={{
                            '@media (max-width: 600px)': {
                                marginLeft: '10px',


                            }
                        }}>
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Electronic</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' className='' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' className='' src='https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Home & Furniture</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Appliances</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Travel</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Beauty, Toys & More</span>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs='auto' >
                            <a href='#' className='' style={{ textDecoration: 'none', color: '#000', textAlign: 'center', display: 'block' }}>
                                <img alt='gro_img' src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' style={{ width: '64px', height: '64px', display: 'flex' }} />
                                <div>
                                    <span style={{ fontWeight: 500 }}>Two Wheelers</span>
                                </div>
                            </a>
                        </Grid>
                    </Grid>

                </Grid>


                <Slider {...settings} style={{ marginTop: '13px' }}>
                    <div>
                        <img style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end' }} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6ae7e9b7ba9a7e13.jpg?q=20" alt="Slide 1" />
                    </div>
                    <div>
                        <img style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end' }} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9d0e32c50dab0c5b.jpeg?q=20" alt="Slide 2" />
                    </div>
                    <div>
                        <img style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end' }} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/62fdd66868594b24.jpg?q=20" alt="Slide 3" />
                    </div>

                </Slider>

                <div style={{ overflowX: 'auto' }}>
                    <Grid
                        container
                       
                        gap={4}
                        sx={{
                            mt: 2,
                            height: '375px',
                            background: '#ffff',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            overflow: 'hidden',
                            flexWrap: 'nowrap',
                            '@media (max-width: 600px)': {
                                flexWrap: 'nowrap',
                                overflowX: 'auto',
                                height: '270px'
                            },
                        }}
                    >
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                 
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/v/e/-original-imagtyxbptwcpjta.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                 
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/v/e/-original-imagtyxbptwcpjta.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        <Link href="your_link_url_here" underline="none" style={{ textDecoration: 'none' }}>

                            <Card sx={{
                                maxWidth: 250, marginLeft: '10px', padding: '10px', border: '1px solid #ccc',
                                borderRadius: '5px', '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap',
                                    overflowX: 'auto',
                                    height: '220px',

                                },
                            }}>

                                <CardMedia
                                   
                                    component="img"
                                    height="200px"
                                    alignItems='center'
                                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/v/e/-original-imagtyxbptwcpjta.jpeg?q=70"
                                    alt="Paella dish"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        objectFit: 'cover',
                                        '@media (max-width: 600px)': {
                                            height: 'auto',
                                            width: '120px',
                                            objectFit: 'cover',
                                            justifyContent: 'center',
                                            marginLeft: '12px'
                                        }
                                    }}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Realme 11 pro 5G
                                    </Typography>
                                    <Typography variant="body2" color="text.bolder">
                                        Incl of offer
                                    </Typography>
                                </CardContent>



                            </Card>
                        </Link>
                        
                       
                    </Grid>
                </div>








            </Container>
        </main>
    )
}
