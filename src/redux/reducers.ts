import { tUser } from "../types/tUser";
import { USERS_FETCH, USERS_FILTER } from "./actionTypes";

const initialState: UsersState = {
  allUsers: [],
  filteredUsers: [],
  filters: {},
};

type UsersState = {
  allUsers: tUser[];
  filteredUsers: tUser[];
  filters: { [key: string]: string };
}

type tUsersAction = 
  { type: 'USERS/FETCH'; payload: tUser[] } | 
  { type: 'USERS/FILTER'; payload: { field: string; value: string } };

export const usersReducer = (
  state: UsersState = initialState,
  action: tUsersAction
): UsersState => {
  switch (action.type) {
    case USERS_FETCH: {
      const { payload } = action;

      return {
        ...state,
        allUsers: payload,
        filteredUsers: payload,
      };
    }

    case USERS_FILTER: {
      const { field, value } = action.payload;

      const newFilters = {
        ...state.filters,
        [field]: value.toLowerCase(),
      };

      const filteredUsers = state.allUsers.filter((user) => {
        return Object.entries(newFilters).every(([key, filterValue]) => {
          const fieldValue = user[key as keyof tUser]?.toString().toLowerCase() ?? '';
          return fieldValue.includes(filterValue);
        });
      });

      return {
        ...state,
        filteredUsers,
        filters: newFilters,
      };
    }

    default:
      return state;
  }
};
