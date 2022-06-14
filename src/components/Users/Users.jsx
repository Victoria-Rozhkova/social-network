import React from 'react';
import module from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pages}`)
      .then(response => {
        console.log(response);
        this.props.setUsers(response.data);
        axios.get(" http://localhost:3004/totalCount")
          .then(response => { this.props.setTotalUsersCount(response.data); });
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`http://localhost:3004/users?_page=${page}&_limit=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalPageCount / this.props.pages);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return <div>
      <div className={module.users}>
        {this.props.users.map(user => <div key={user.id} className={module.user}>
          <div className={module.userFollow}>
            <a href="#1">
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="img" />
            </a>
            {user.followed === true
              ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
          </div>
          <div className={module.userInfo}>
            <div className={module.userLeft}>
              <div className={module.userName}> <a href="#2">{user.name}</a></div>
              <div className={module.userStatus}>{user.status}</div>
            </div>
            <div className={module.userRight}>
              <div className={module.userCountry}>{'user.location.country'} </div>
              <div className={module.userCity}>{'user.location.city'}</div>
            </div>
          </div>
        </div>)
        }</div >
      <div className={module.pagination}>
        {pages.map(page => {
          return <button className={this.props.currentPage === page
            ? module.currentPage : module.pageBtn}
            onClick={() => { this.onPageChange(page); }}>{page}</button>;
        })}
      </div>
    </div>;
  }
}
export default Users;