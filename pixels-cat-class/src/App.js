import * as React from 'react';
import {
  Box,
} from '@mui/material'

import BaseLayout from './modules/layouts/base-layout';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cats : [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { cats : users}
    }, 
    () => {
      console.log(this.state)
    }))
  }

  render(){
    const { cats } = this.state;

    return (
      <BaseLayout>
        <Box component="section" sx={{ py: 4, height: '1500px' }}>
        {cats?.map((cat) => (
            <h1 key={cat.id}>{cat.name}</h1>
        ))}
        </Box>
      </BaseLayout>
    )
  }
}

export default App;
