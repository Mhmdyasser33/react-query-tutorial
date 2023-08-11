import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const fetchUserByEmail = (email) =>{
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelID = (channelId) =>{
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}
// implement dependant query
const DependantQueries = ({email}) => {
   const {data : user} =  useQuery(['users' , email ] , () => fetchUserByEmail(email)) ;
   // this channelID is used to connect user with channel
   const channelId = user?.data.channelID;

 useQuery(['courses' , channelId] , () => fetchCoursesByChannelID(channelId) , {
    enabled : !!channelId,
 })
  return (
    <div>DependantQueries</div>
  )
}

export default DependantQueries