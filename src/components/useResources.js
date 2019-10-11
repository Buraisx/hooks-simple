import { useState, useEffect } from 'react';
import axios from 'axios';


const useResources = (resource) => {
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

  return resources;
};

export default useResources;