import usersReduser, {
  InitialStateType,
  usersActions,
} from "src/redux/usersReduser";

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 1,
        name: "Name 1",
        photos: { large: null, small: null },
        status: "Test status 1",
        followed: false,
      },
      {
        id: 2,
        name: "Name 2",
        photos: { large: null, small: null },
        status: "Test status 2",
        followed: false,
      },
      {
        id: 3,
        name: "Name 3",
        photos: { large: null, small: null },
        status: "Test status 3",
        followed: true,
      },
      {
        id: 4,
        name: "Name 4",
        photos: { large: null, small: null },
        status: "Test status 4",
        followed: true,
      },
    ],
    pageSize: 10,
    totalPageCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    portionSize: 10,
    filter: { term: "", friend: null },
  };
});

test("follow succses", () => {
  const newState = usersReduser(state, usersActions.followSuccses(2));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test("unfollow succses", () => {
  const newState = usersReduser(state, usersActions.unfollowSuccses(4));
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
