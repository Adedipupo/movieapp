import axios from "axios";
import { useQuery } from "react-query";
import { URL, API_KEY } from "../../constant";

const getMovies = async () => {
  const {data} = (await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=fa2fa335b93284c5277907e139256806`
  )) as any;
  return data;
};

const useMovies = () => useQuery("movies", getMovies);
export default useMovies;


