import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  OPEN_STREET,
  CLOSE_STREET,
  OPEN_ALTER,
  CLOSE_ALTER
} from "../actions/actionType";

const initialState = {
  isAuthenticated: false,
  street: false,
  alter:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        userProfile: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,

      };
      case OPEN_STREET:
        return {
          ...state,
          street: true,
        };
      case CLOSE_STREET:
        return {
          ...state,
          street: false,
    
        };
        case OPEN_ALTER:
          return {
            ...state,
            alter: true,
          };
        case CLOSE_ALTER:
          return {
            ...state,
            alter: false,

          };
    default:
      return state;
  }
}
