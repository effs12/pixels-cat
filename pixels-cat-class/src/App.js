import * as React from 'react';
import BaseLayout from './modules/layouts/base-layout';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

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
        <SearchBox/>
        <CardList cats={cats}/>
      </BaseLayout>
    )
  }
}

export default App;
