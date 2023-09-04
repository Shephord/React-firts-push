import { connect } from "react-redux";
import  axios  from "axios";
import {
  followAc,
  setUsersAc,
  unFollowAc,
  currentPageAc,
  setTotalUsersCountAC,
} from "../../Redux/UserReducer";
import Users from "./Users";
import { Component } from "react";
class UserContainer extends Component {
  componentDidMount() {
    try {
      axios
        .get(
          `https://randomuser.me/api/1.4/?page=${this.props.currentPage}&results=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.results);
          // this.props.setTotalUsersCount(response.data.results); // if i have a full list of user
          console.log(response);
        });
    } catch (err) {
      console.log(` err : ${err}`);
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    try {
      axios
        .get(
          `https://randomuser.me/api/1.4/?page=${page}&results=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.results);
        });
    } catch (err) {
      console.log(` err : ${err}`);
    }
  };
  render() {
    return (
      <Users
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUserCount,
    currentPage: state.UsersPage.currentPage,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    follow: (userID) => dispatch(followAc(userID)),
    unfollow: (userID) => dispatch(unFollowAc(userID)),
    setUsers: (users) => dispatch(setUsersAc(users)),
    setCurrentPage: (pageNumber) => dispatch(currentPageAc(pageNumber)),
    // setTotalUsersCount: (totalCount) =>
    //   dispatch(setTotalUsersCountAC(totalCount)), // if i know how many users i have and i don't generate it
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
