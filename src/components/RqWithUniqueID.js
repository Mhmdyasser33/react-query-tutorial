import React from 'react'
import { DataInfo } from '../hooks/RqWithInfo'
import {useParams} from 'react-router-dom'
const RqWithUniqueID = () => {
  // to get id from url using useParams
  const {heroId} = useParams() ;
  const {isLoading , isError , error , data} = DataInfo(heroId) ;
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>{error.message}</div>
  }
   return (
 <div>
   {data?.data.name} - {data?.data.city}
 </div>
  )
}

export default RqWithUniqueID