import React, { useState }from 'react';
import ResourceList from './ResourceList';

const App = () => {
  // useState uses array destructuring
  const [resource, setResource] = useState('posts');
  return (
    <main>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </main>
  );
}

export default App;
