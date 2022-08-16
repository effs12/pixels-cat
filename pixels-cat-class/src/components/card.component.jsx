import * as React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'

class CardItem extends React.Component {
    render(){
        const { id, name, email } = this.props.cat

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
                <CardContent sx={{flex:1}}>
                    <Typography sx={{ fontWeight:'bold' }} variant="body2" align="center" component="h2">
                        {name}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ 
                        border: '4px solid #EFEFEF'
                    }}
                    component="img"
                    image={`https://robohash.org/${id}?set=set4&size=180x180`}
                    alt={name}
                />
                <CardContent sx={{flex:1}}>
                    <Typography variant="body2" align="center" color="text.secondary">
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default CardItem