import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperHero = () => {
  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const heroesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
  };

  const heroItemStyle = {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
  };

  const loadingStyle = {
    fontSize: '18px',
    fontStyle: 'italic',
    margin: '1rem',
    fontWeight : 'bold'
  };

  const errorStyle = {
    fontSize: '18px',
    color: 'red',
    margin: '1rem',
    fontWeight : 'bold'
  };

  const [heros, setHeros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState("") ;

  useEffect(() => {
    axios
      .get("http://localhost:4000/heros")
      .then((res) => {
        const result = res.data;
        setHeros(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message) ;
        setLoading(false) ;
      });
  }, []);

  if (loading) {
    return <div style={loadingStyle}>loading...</div>;
  }
  if(error){
    return <div style={errorStyle}>{error}</div>
  }

  return (
    <div>
      <h1 style={titleStyle}>superHeros , this data fetched from endpoint </h1>
      {heros ? (
        <div style={heroesContainerStyle}>
          {heros.map((hero) => (
            <div style={heroItemStyle} key={hero.id}>
              {hero.name}
            </div>
          ))}
        </div>
      ) : (
        "there is no heroes"
      )}
    </div>
  );
};

export default SuperHero;
