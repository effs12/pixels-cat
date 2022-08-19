import * as React from 'react'
import {
    Box,
    Paper,
    InputBase,
    Grid,
} from '@mui/material'

const SearchBox = (props) => {
    const { placeholder, onChangeHandler } = props

    return(
        <Box component="div">
            <Grid container justifyContent="center">
                <Grid item xs={10} md={6}>
                    <Paper
                        component="form"
                        sx={{
                            mt : 8,
                            mb : 3,
                            background : '#fff',
                            borderRadius : 1,
                        }}
                    >
                    <InputBase
                        sx={{ 
                            py: 1,
                            px: 2,
                            }}
                        color="primary"
                        type="search"
                        fullWidth
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                    />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBox