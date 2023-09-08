import { connect } from "react-redux";
import axios from "axios";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../Redux/UserReducer";
import Users from "./Users";
import { Component } from "react";
import Preloader from "../common/Preloader/preloader";
class UserContainer extends Component {
  componentDidMount() {
    try {
      this.props.toggleIsFetching(true);
      axios
        .get(
          `https://d-b1.onrender.com/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
          //   `https://randomuser.me/api/1.4/?page=${this.props.currentPage}&results=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data);
          this.props.setTotalUsersCount(response.headers["x-total-count"]); // if i know how many users i have and i don't generate it
        });
    } catch (err) {
      console.log(` err : ${err}`);
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    try {
      this.props.toggleIsFetching(true);
      axios
        .get(
          `https://d-b1.onrender.com/users?_page=${page}&_limit=${this.props.pageSize}`
          // `https://randomuser.me/api/1.4/?page=${page}&results=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data);
        });
    } catch (err) {
      console.log(` err : ${err}`);
    }
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUserCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
  
  };
  
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount // if i know how many users i have and i don't generate it i use this
})(UserContainer);
