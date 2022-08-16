import * as React from 'react'
import {
    Box,
    Container,
} from '@mui/material'

import Banner from '../../components/banner.component'

class BaseLayout extends React.Component {
    render(){
        const { children } = this.props

        return(
            <Box 
                component="div" 
                id="App"
                sx={{
                    backgroundColor : '#819FB9',
                }}
            >
                <Banner />
                <Container maxWidth="lg" sx={{ position : 'relative', zIndex : 5}}>
                    {children}
                </Container>
            </Box>
        )
    }
}

export default BaseLayout