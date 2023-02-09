import profileReducer, { actionsProfile } from "../redux/profile.reducer";

const state = {
  posts: [
    {
      id: 1,
      post: "Hey from props",
      likesCount: 5,
    },
    {
      id: 2,
      post: "Hello from map",
      likesCount: 3,
    },
  ],
  profile: null,
  status: "",
};

test("length posts should incremented", () => {
  const action = actionsProfile.addPost("Test post");

  const testProfileReducer = profileReducer(state, action);

  expect(testProfileReducer.posts.length).toBe(3);
});

test("message of new post should be correct", () => {
  const action = actionsProfile.addPost("Test post");

  const testProfileReducer = profileReducer(state, action);

  expect(testProfileReducer.posts[2].post).toBe("Test post");
});

test("post should be deleted", () => {
  const action = actionsProfile.deletePost(1);

  const testProfileReducer = profileReducer(state, action);

  expect(testProfileReducer.posts.length).toBe(1);
});
test("after deleting length should not be decrement if id is incorrect", () => {
  const action = actionsProfile.deletePost(10);

  const testProfileReducer = profileReducer(state, action);

  expect(testProfileReducer.posts.length).toBe(2);
});
