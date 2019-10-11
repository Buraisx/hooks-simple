import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    // state setter
    setResources(response.data);
  };

  // Triggers everytime our component is updated or mounted
  // Arrow function is called only when our resource is different from previous
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  return (
    <ul>
      {
        resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))
      }
    </ul>
  )
}

export default ResourceList;