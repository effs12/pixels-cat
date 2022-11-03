import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';
import BaseLayout from './modules/layouts/base-layout';
import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

export type Cat = {
  id : string;
  name: string;
  email : string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [cats, setCats] = useState<Cat[]>([])
  const [filteredCats, setFilterCats] = useState(cats);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Cat[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setCats(users)
    }
    fetchUsers()
  },[])

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField)
    })
    setFilterCats(newFilteredCats)
  },[searchField,cats])

  const onSearchChange = (event : ChangeEvent<HTMLInputElement>) : void => {
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
