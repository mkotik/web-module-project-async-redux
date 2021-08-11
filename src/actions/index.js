import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";

export const getData = () => {
  return (dispatch) => {
    dispatch(startFetch());
    axios
      .get(
        "https://rest.coinapi.io/v1/assets/BTC;ETH;ADA;C3;SRK;MATIC;BNB;SUPER;DOGE?apikey=0257A914-499F-4F3E-A8A8-B9163FD989E3"
      )
      .then((res) => dispatch(fetchSuccess(res.data)))
      .catch((err) => dispatch(fetchFail(err.response.error.data)));
  };
};

export const startFetch = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
