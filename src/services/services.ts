import axios from 'axios';
import { useQuery } from 'react-query'
import {URL ,API_KEY} from '../../constant';


export const getMovies = () => {
    const { isLoading, error, data } = useQuery('movieData', () =>
    axios.get(`${URL}movie/popular?api_key=${API_KEY}`)
  )
  console.log(data)
}