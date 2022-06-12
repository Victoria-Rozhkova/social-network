const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://yosoyqueen.com/wp-content/uploads/2021/06/11.png",
    //   followed: true,
    //   status: "I`m a boss",
    //   fullName: "Dmitry K.",
    //   location: { country: "Belarus", city: "Minsk" },
    // },
    // {
    //   id: 2,
    //   photoUrl: "https://yosoyqueen.com/wp-content/uploads/2021/06/11.png",
    //   followed: true,
    //   status: "I`m a boss",
    //   fullName: "Inna D.",
    //   location: { country: "Belarus", city: "Minsk" },
    // },
    // {
    //   id: 3,
    //   photoUrl: "https://yosoyqueen.com/wp-content/uploads/2021/06/11.png",
    //   followed: true,
    //   status: "I`m a boss",
    //   fullName: "Sara A.",
    //   location: { country: "Belarus", city: "Minsk" },
    // },
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};

export default usersReduser;
