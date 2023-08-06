import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
const RqSuperHero = () => {
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

  const heroItemStyle = {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const fetched_data = async () =>{
    return axios.get("http://localhost:4000/heros")
    .then((res) => res.data) ;
  }
  const {isLoading , data , isError,  error}  = useQuery('heros' , fetched_data) ;
  if(isLoading){
  return <div style={loadingStyle}>Loading...</div>
  }
  if(isError){
    return <div style={errorStyle}>{error.message}</div>
  }
  return (
    <div>
     <h1 style={titleStyle}> Heros </h1>
     {data ? data.map((hero) =>(
       <div  style={heroItemStyle}key={hero.id}>{hero.name}</div>
     )) : "there is no hero"}
    </div>
  )
}


export default RqSuperHero