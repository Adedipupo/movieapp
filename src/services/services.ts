import axios from 'axios';
import { useQuery } from 'react-query'
import {URL ,API_KEY} from '../../constant';

const getMovies = async() => {
  const { data } = await axios.get(`${URL}/movie/550?api_key=${API_KEY}`)
  return data;
}

const useMovies = () => useQuery('posts', getMovies);
export default useMovies;