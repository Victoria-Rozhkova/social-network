import profileReduser, { addPost, deletePost } from "../redux/profileReduser";

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
};

test("length posts should incremented", () => {
  const action = addPost("Test post");

  const testProfileReduser = profileReduser(state, action);

  expect(testProfileReduser.posts.length).toBe(3);
});

test("message of new post should be correct", () => {
  const action = addPost("Test post");

  const testProfileReduser = profileReduser(state, action);

  expect(testProfileReduser.posts[2].post).toBe("Test post");
});

test("post should be deleted", () => {
  const action = deletePost(1);

  const testProfileReduser = profileReduser(state, action);

  expect(testProfileReduser.posts.length).toBe(1);
});
test("after deleting length should not be decrement if id is incorrect", () => {
  const action = deletePost(10);

  const testProfileReduser = profileReduser(state, action);

  expect(testProfileReduser.posts.length).toBe(2);
});
