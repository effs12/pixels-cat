import * as React from 'react';
import BaseLayout from './modules/layouts/base-layout';

import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

const App = () => {
  const [searchField, setSearchField] = React.useState('');
  const [cats, setCats] = React.useState([])
  const [filteredCats, setFilterCats] = React.useState(cats);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setCats(users));
  },[])

  React.useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField)
    })

    setFilterCats(newFilteredCats)

  },[searchField,cats])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <BaseLayout>
      <SearchBox
        placeholder="Search Pixels Cat Here..."
        onChangeHandler={onSearchChange}
      />
      <CardList 
        cats={filteredCats}
      />
    </BaseLayout>
  )
}

export default App;
