import * as React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
} from '@mui/material'
import { ImagePixelated } from "react-pixelate"

const CardItem = ({cat}) => {
    const { id, name, email } = cat

    return(
        <Card 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                border: '8px solid #FFE165',
                background : 'linear-gradient(transparent, 45%, #94BB4C)',
                px:3,
            }}
        >
            <CardContent sx={{flex:1, px : 0, py: 1}}>
                <Typography 
                    fontWeight={'bold'}
                    variant="body2" 
                    align="center" 
                    component="h2"
                >
                    {name}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ 
                    pt :6,
                    pb :2,
                    px: 2,
                    background : '#779DC9',
                    border: '4px solid #EFEFEF',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('/images/bg/card-pixel-bg.jpg')`,
                }}
                component="div"
                alt={name}
                align="center"
            >
                <ImagePixelated 
                    src={`https://robohash.org/${id}?set=set4&size=180x180`} 
                    fillTransparencyColor={"transparent"} 
                    pixelSize={5}
                    width={120}
                    height={120}
                />
            </CardMedia>
            <CardContent sx={{pt: 3, pb:0}} align="center">
                <Rating name="half-rating" defaultValue={email.length / 5} precision={0.5} size="large" readOnly/>
            </CardContent>
        </Card>
    )
}

export default CardItem