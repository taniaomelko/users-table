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
  { type: typeof USERS_FETCH; payload: tUser[] } | 
  { type: typeof USERS_FILTER; payload: { field: string; value: string } };

function normalizeUsername(username: string): string {
  const normalized = username.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized;
}

const normalizePhone = (phone: string): string => {
  const normalized = phone.replace(/[^\d]/g, '');
  return normalized;
};

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
          let fieldValue = user[key as keyof tUser]?.toString().toLowerCase() ?? '';

          if (key === 'username') {
            fieldValue = normalizeUsername(fieldValue);
            filterValue = normalizeUsername(filterValue);
          }

          if (key === 'phone') {
            fieldValue = normalizePhone(fieldValue);
            filterValue = normalizePhone(filterValue);
          }

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
