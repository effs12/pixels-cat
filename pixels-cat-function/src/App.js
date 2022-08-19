import * as React from 'react';
import BaseLayout from './modules/layouts/base-layout';

import CardList from './components/card-list.component';

const App = () => {
  const [cats, setCats] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setCats(users));
  },[])

  return (
    <BaseLayout>
      <CardList 
        cats={cats}
      />
    </BaseLayout>
  )
}

export default App;
