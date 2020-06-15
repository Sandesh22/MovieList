import axios from "axios";
import { GET_MOVIES_BY_YAER } from "../URLConst";
function getMovies(year) {
  var promise = new Promise(function (resolve, reject) {
    axios
      .get(GET_MOVIES_BY_YAER, {
        params: {
          Year: year,
        },
      })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
}
export default getMovies;
