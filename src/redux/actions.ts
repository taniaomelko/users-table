import { tUser } from "../types/tUser";
import { USERS_FETCH, USERS_FILTER } from './actionTypes';

export const fetchUsers = (users: tUser[]) => {
  return {
    type: USERS_FETCH,
    payload: users,
  }
}

export const filterUsers = (field: string, value: string) => {  
  return {
    type: USERS_FILTER,
    payload: {
      field,
      value,
    },
  }
}
