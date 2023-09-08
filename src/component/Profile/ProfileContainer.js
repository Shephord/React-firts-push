import { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/ProfileReducer";
class ProfileContainer extends Component {
  componentDidMount() {
    try {
      axios.get(`https://d-b1.onrender.com/users/1`).then((response) => {
        this.props.setUserProfile(response.data);
        
      });
    } catch (error) {
      console.log("err:", error);
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.props} Profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.Profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
