import * as React from 'react';
import {
  Typography,
  Box,
} from '@mui/material'

import BaseLayout from './modules/layouts/base-layout';

class App extends React.Component{
  render(){
    return (
      <BaseLayout>
        <Box component="section" sx={{ py: 4, height: '1500px' }}></Box>
      </BaseLayout>
    )
  }
}

export default App;
