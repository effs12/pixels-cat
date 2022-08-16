import * as React from 'react'
import {
    Grid,
    Box,
} from '@mui/material'

class CardList extends React.Component {
    render(){
        const { cats } = this.props

        return(
            <Box component="section" sx={{ py: 4, height: '1500px' }}>
                <Grid container justifyContent="center">
                    {cats?.map((cat) => (
                        <Grid item xs={6} md={3} sx={{p : 2}} key={cat.id}>
                            <h1>{cat.name}</h1>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}

export default CardList