export const usersToggleFollow = (items, prototype, actionId, param) =>
  items.map((user) => {
    if (user[prototype] === actionId) {
      return { ...user, ...param };
    }
    return user;
  });
