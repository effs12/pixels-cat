import * as React from 'react'
import {
    Grid,
    Box,
} from '@mui/material'

import { Cat } from '../App'
import Card from './card.component'

type CardListProps = {
    cats : Cat[];
}

const CardList = ({ cats } : CardListProps) => {
    return(
        <Box component="section" sx={{ py: 4, minHeight:'500px' }}>
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

export default CardList