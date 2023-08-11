import React from 'react'
import axios from 'axios'
import { useQueries } from 'react-query'
const fetchSuperHeroData = (heroId) =>{
  return axios.get(`http://localhost:4000/heros/${heroId}`)
}
const DynamicParallelQueries = ({heroIds}) => {
  // useQueries take only one argument
    const queryResult = useQueries(
        heroIds.map((id) =>{
            return{
               queryKey : ['super-hero' , id] ,
               queryFn : () => fetchSuperHeroData(id)
                }
            })
    )
    /* console.log(queryResult) */
  return (
    <div>DynamicParallelQueries</div>
  )
}

export default DynamicParallelQueries