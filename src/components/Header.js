'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import InboxIcon from '@mui/icons-material/Inbox';


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F0F5FF',
    marginLeft: '50px',
    width: '45%',
    color: 'black'

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <header className=''>
            <Box sx={{ flexGrow: 1 }}  >
                <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow:'none' }}>
                    <Toolbar sx={{ justifyContent: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="black"
                            aria-label="open drawer"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', md: 'none' }  }}

                        >
                            <MenuIcon />
                        </IconButton>

                        <img className='img-fluid ' alt='flip_logo'
                            src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'>
                        </img>

                        <Search sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for Products, Brands and More"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Button
                            sx={{
                                marginLeft: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#2A55E5',
                                    color: '#ffffff',
                                    '& img': {
                                        filter: 'brightness(0) invert(1)',
                                    },
                                },
                            }}
                        >
                            <img className='img-fluid' alt='btn-logo' src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg' style={{ marginRight: '5px', transition: 'filter 0.3s ease' }} />
                            Login
                            <ArrowDropDownIcon sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }} />
                        </Button>

                        <Button
                            sx={{
                                marginLeft: '20px',
                                display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
                                alignItems: 'center',
                                color: 'black',
                                boxShadow: 'none',
                            }}
                        >
                            <ShoppingCartIcon style={{ marginRight: '5px' }} />
                            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                                Cart
                            </Box>
                        </Button>


                        <Button
                            sx={{
                                marginLeft: '20px',
                                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                                alignItems: 'center',
                                color: 'black',
                                boxShadow: 'none',
                            }}
                        >
                            <StorefrontIcon style={{ marginRight: '5px' }} />
                            Become a Seller
                        </Button>



                        <Button
                            sx={{
                                marginLeft: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#FAFAFA',
                                    color: '#000000', // Set the icon color on hover
                                },
                                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }
                            }}
                        >
                            <MoreVertIcon />
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
