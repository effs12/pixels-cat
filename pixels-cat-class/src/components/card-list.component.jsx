import * as React from 'react'
import {
    Grid,
    Box,
} from '@mui/material'

import Card from './card.component'

class CardList extends React.Component {
    render(){
        const { cats } = this.props

        return(
            <Box component="section" sx={{ py: 4, height: '1500px' }}>
                <Grid container justifyContent="center">
                    {cats?.map((cat) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{p : 2}} key={cat.id}>
                            <Card cat={cat}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}

export default CardList