export const selectLoading = (state) => state.tasks.loading;

export const selectFilter = (state) => state.tasks.filter;

export const selectAllTasks = (state) => state.tasks.items;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const useSelector = (state) => state.auth.isLoggedIn;
