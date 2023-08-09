    import React from 'react'
  import CustomHook from '../../hooks/CustomHook'
  import { Link } from 'react-router-dom';
    const RqSuperHero = () => {

      const onSuccess = (date) =>{
          console.log('Data fetched successfully:' , date);
      }

      const onError = (error) =>{
          console.log('Error fetching data' , error);
      }
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

      const {isLoading , data , isError,  error , isFetching , refetch}  = CustomHook(onSuccess , onError) ;
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
        {data ? data.map((hero) => (
  <div style={heroItemStyle}>
    <Link to={`/rq-super-hero/${hero.id}`}>
      {hero.name}
    </Link>
  </div>
)) : "there is no data"}
        {/*  {data ? data.map((superHeroName) =>(
            <div key={Math.random()*10} style={superHeroStyle}>
              Name : {superHeroName}
            </div>
          )) : "There is No Data"} */}
          {/*  */}
      {/*    {data ? data.map((superHeroName) =>(
            <div key={Math.random()*10}>
              Name : {superHeroName.name}
            </div>
          )) : "There is No Data"} */}
        </div>

        {/* handle refetch data but manually  */}
        <button onClick={() => refetch()} style={ btnStyle} disabled={data}>Fetch data </button>
        </>
      )
    }


    export default RqSuperHero