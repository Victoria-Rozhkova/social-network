import { follow, unfollow, usersActions } from "@/redux/users.reducer";
import { APIResponseType, ResultCodesEnum } from "@/api/api";
import { UsersAPI } from "@/api/users-api";

jest.mock("@/api/users-api");
const UsersAPImock = UsersAPI as jest.Mocked<typeof UsersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  UsersAPImock.followUser.mockClear();
  UsersAPImock.unfollowUser.mockClear();
});

const result: APIResponseType = {
  data: {},
  messages: [],
  resultCode: ResultCodesEnum.Succses,
};

test("thunk follow should be called 3 times", async () => {
  // когда вызовется запрос на сервер, подменяем response
  UsersAPImock.followUser.mockReturnValue(Promise.resolve(result));

  const thunk = follow(1);

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    usersActions.toggleFollowing(true, 1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    usersActions.followSuccses(1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    usersActions.toggleFollowing(false, 1)
  );
});
test("thunk unfollow should be called 3 times", async () => {
  // когда вызовется запрос на сервер, подменяем response
  UsersAPImock.unfollowUser.mockReturnValue(Promise.resolve(result));

  const thunk = unfollow(2);

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    usersActions.toggleFollowing(true, 2)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    usersActions.unfollowSuccses(2)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    usersActions.toggleFollowing(false, 2)
  );
});
