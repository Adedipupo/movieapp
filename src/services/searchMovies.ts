import axios from "axios";
import { useQuery } from "react-query";
import { URL, API_KEY } from "../../constant";

const searchMovies = async (search) => {
  const {data} = (await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=fa2fa335b93284c5277907e139256806&language=en-US&query=${search}`
  )) as any;
  return data;
};

const useSearch = () => useQuery("search", searchMovies);
export default useSearch;


