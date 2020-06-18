import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  OPEN_STREET,
  CLOSE_STREET,
  // SHOW_MESSAGE,
  // HIDE_MESSAGE,
} from "./actionType";
// import axios from "axios";

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    // payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const openStreet = () => {
  return {
    type: OPEN_STREET,
  };
};

export const closeStreet = () => {
  return {
    type: CLOSE_STREET,
  };
};

// export const showMessage = (msg) => {
//   return {
//     type: SHOW_MESSAGE,
//     payload: msg,
//   };
// };
//
// export const hideMessage = () => {
//   return {
//     type: HIDE_MESSAGE,
//   };
// };
