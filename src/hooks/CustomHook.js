import { useQuery } from 'react-query';
import axios from 'axios';

const CustomHook = (onSuccess , onError) => {
    const fetched_data = async () =>{
        return axios.get("http://localhost:4000/heros??")
        .then((res) => res.data) ;
      }
   return  useQuery('heros' , fetched_data , {
        // default time is 5000
      /*  cacheTime : 5000 , */
      /*  staleTime : 3000, */
      /* refetchOnMount : true , */
    /*  refetchOnWindowFocus : true */
      /*    refetchInterval : 3000, */
        /*refetchIntervalInBackground : 60000,*/
        // prevent refetching the data
        enabled : false ,
      /*   onSuccess : onSuccess ,
        onError : onError ,  ===   onSuccess,
        onError,*/
        onSuccess,
        onError ,
        // this is used to select heroName fetched from api
        select: (data) =>{
          if(data){
        const heroName = data.map((hero) => hero.name) ;
        return heroName ;
        }
        //this part include how to use filtration in data transformation
       /*  if (data) {
          const heroName = data.filter(item => {
            return item.name.startsWith("J");
          });
          return heroName;
        } */
        }
      }) ;
}

export default CustomHook