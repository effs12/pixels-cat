import * as React from 'react'
import {
    Box,
    Typography,
} from '@mui/material'

class Banner extends React.Component {
    render(){

        return(
            <Box
                component="section"
                sx={{
                    border:1,
                    py: 20,
                    position: 'relative',
                    borderBottom: '10px solid #4B4B6F',
                    backgroundColor: 'background.section',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('/images/bg/pixel-bg.png')`,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        background: 'rgba(0, 0, 0, 0.2)'
                    }}
                />
                <Box component="div">
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        align="center" 
                        color="white"
                    >
                        PIXELS CAT
                    </Typography>
                </Box>
            </Box>
        )
    }
}

export default Banner