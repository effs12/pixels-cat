import * as React from 'react';
import BaseLayout from './modules/layouts/base-layout';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cats : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { cats : users}
    }))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render(){
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filterCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField)
    })

    return (
      <BaseLayout>
        <SearchBox
          placeholder="Search Pixels Cat Here..."
          onChangeHandler={onSearchChange}
        />
        <CardList 
          cats={filterCats}
        />
      </BaseLayout>
    )
  }
}

export default App;
