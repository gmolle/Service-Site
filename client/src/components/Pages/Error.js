import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Error page component if the path is not valid
const Error = () => {

  useEffect(() => {
    document.title = 'Error'
  })
  return (
    <div className="error">
      <h2>Page not found!</h2>
      <Link to="/"><h2>Home</h2></Link>
    </div>
  );
}

export default Error;