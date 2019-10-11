import React, { useState }from 'react';
import ResourceList from './ResourceList';
import UserList from './userList';

const App = () => {
  // useState uses array destructuring
  const [resource, setResource] = useState('posts');
  return (
    <main>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </main>
  );
}

export default App;
