import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const ParallelQueries = () => {

  const fetchSUperHeros = () =>{
    return axios.get("http://localhost:4000/heros")
  }

  const fetchFriends = () =>{
    return axios.get("http://localhost:4000/friends")
  }
  const {data : superHero , isLoading : superHeroLoading , isError : isErrorLoading , error : superHeroError} =  useQuery('super-hero' , fetchSUperHeros)
  const {data : friends , isLoading : friendsLoading , isError  :friendsIsError, error : friendsError} = useQuery('friends' , fetchFriends)
  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries