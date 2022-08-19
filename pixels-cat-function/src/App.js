import * as React from 'react';
import BaseLayout from './modules/layouts/base-layout';

const App = () => {
  const [cats, setCats] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setCats(users));
  },[])


  return (
    <BaseLayout>
    {cats.map((cat) => (
      <h1 key={cat.id}>{cat.name}</h1>
    ))}
    </BaseLayout>
  )
}

export default App;
