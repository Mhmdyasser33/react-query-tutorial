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

  const btnStyle ={
    background: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin : '20px 0 0 0 '
  }
  const fetched_data = async () =>{
    return axios.get("http://localhost:4000/heros")
    .then((res) => res.data) ;
  }
  const {isLoading , data , isError,  error , isFetching , refetch}  = useQuery('heros' , fetched_data , {
    // default time is 5000
   /*  cacheTime : 5000 , */
   /*  staleTime : 3000, */
  /* refetchOnMount : true , */
 /*  refetchOnWindowFocus : true */
   /*    refetchInterval : 3000, */
     /*refetchIntervalInBackground : 60000,*/
     // prevent refetching the data
     enabled : false ,
  }) ;
  console.log('====================================');
  console.log("loading :  " + isLoading , "Fetched : " + isFetching);
  console.log('====================================');
  if(isLoading || isFetching){
  return <div style={loadingStyle}>Loading...</div>
  }
  if(isError){
    return <div style={errorStyle}>{error.message}</div>
  }
  return (
    <>
    <div>
     <h1 style={titleStyle}> Heros </h1>
     {data ? data.map((hero) =>(
       <div  style={heroItemStyle}key={hero.id}> {hero.name}</div>
       )) : "there is no data "}
    </div>
    {/* handle refetch data but manually  */}
    <button onClick={() => refetch()} style={btnStyle } disabled={data}>Fetch data </button>
    </>
  )
}


export default RqSuperHero