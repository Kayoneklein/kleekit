import React, { useState, useEffect, Component } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
  loginFailure,
  loginSuccess,
  // addProfile,
  // removeProfile,
} from "../redux/actions/authAction";
// import history from "../history/history";
import setAuthHeader from "../util/setAuthHeader";

const AuthCheck = (props) => {
  const history = useHistory();
  const [isAuthenticated, setAuthenticated] = useState(props.isAuthenticated);

  useEffect(() => {
    if (this.props.isAuthenticated) {
      //       setAuthHeader(this.props.token);
      //
      //       console.log("is auth");
      history.replace("/dashboard");
    } else {
      //       // axios.get("http://localhost:5000/logout").then((res) => alert(res.data));
      //
      //       this.props.LOGIN_FAILURE();
      //       // this.props.REMOVE_PROFILE();
      //       setAuthHeader();
      //       console.log("login-failure");
      history.replace("/");
    }
  }, []);

  return (
    <>
      <h1>working</h1>
    </>
  );
};

// export default APP;
// const AuthCheck = (props) => {

// useEffect(()=> {
//   if(props.isAuthenticated){

//   }
// })

//   render(
//     return (
//       <>
//       <h1>working</h1>>
//       </>
//     )
//   )
// }
// class AuthCheck extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   state = {};
//   componentDidMount() {
//     if (this.props.isAuthenticated) {
//       setAuthHeader(this.props.token);
//
//       console.log("is auth");
//       // history.replace("/dashboard");
//     } else {
//       // axios.get("http://localhost:5000/logout").then((res) => alert(res.data));
//
//       this.props.LOGIN_FAILURE();
//       // this.props.REMOVE_PROFILE();
//       setAuthHeader();
//       console.log("login-failure");
//       // history.replace("/");
//     }
//   }
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             height: "65vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-end",
//           }}
//         >
//           <Link to="/dashboard">
//             <h1 className="btn">Welcome</h1>{" "}
//           </Link>
//         </div>
//       </>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth_reducer.isAuthenticated,
    profile: state.auth_reducer.userProfile,
    token: state.auth_reducer.token,
  };
}
function MapDispatchToProps(dispatch) {
  return {
    LOGIN_SUCCESS: () => dispatch(loginSuccess()),
    LOGIN_FAILURE: () => dispatch(loginFailure()),
    // ADD_PROFILE: (profile) => dispatch(addProfile(profile)),
    // REMOVE_PROFILE: () => dispatch(removeProfile()),
  };
}

export default connect(mapStateToProps, MapDispatchToProps)(AuthCheck);
