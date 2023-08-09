import axios from "axios";
import { useQuery } from "react-query";
  const fetchData = (heroID) =>{
   return axios.get(`http://localhost:4000/heros/${heroID}`)
  }
export const DataInfo = (heroID) =>{
  return useQuery(['super-hero' , heroID] , () => fetchData(heroID))
}