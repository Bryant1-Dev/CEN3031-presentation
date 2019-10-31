import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verified: false
    };
  }

  componentDidMount() {
    this.props.verify("/users/verify", data => {
      this.setState({
        verified: data.success
      });
      //user is not authorized or their session expired
      //move them to the login page to get a new session
      if (!data.success) {
        console.log("Session ended: " + JSON.stringify(data));
        this.props.history.push("/users/login");
      } else {
        console.log("Authenticated user data: " + JSON.stringify(data));
      }
    });
  }
  /* axios
      .get("/users/verify")
      .then(response => {
        this.setState({
          verified: response.data.success
        });
        //on success res.data has: success, message, user.name, user.email, user.logggedIn
        //user isn't authorized or their session expired
        //move them to the login page to get a new session
        if (!response.data.success) {
          this.props.history.push("/login");
          console.log("Session ended: " + JSON.stringify(response.data));
        } else {
          console.log(
            "Authenticated user data: " + JSON.stringify(response.data)
          );
        }
      })
      .catch(err => {
        this.props.history.push("/login");
      }); */

  render() {
    if (!this.state.verified) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticatedComponent);
