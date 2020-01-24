import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./Types";

// !!!  Going to refactor, but left as a good example of the functionallity. Calls function, sets loading to true via reducer, awaits response, sets it to json, and dispatches that to reducer as well
// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const res = await fetch("/logs");
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// SET LOADING TO TRUE, 'return' TO REDUCER
export default setLoading = () => {
  return {
    type: SET_LOADING
  };
};
