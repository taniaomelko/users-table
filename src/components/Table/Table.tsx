
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { tUser } from '../../types/tUser';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/actions';
import { Search } from '../Search/Search';
import { Loader } from '../Loader/Loader';

function useUsers() {
  const dispatch = useDispatch();
  const storedUsers = useSelector((state: RootState) => state.users.allUsers);

  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<tUser[]> => {
      if (storedUsers.length > 0) {
        return storedUsers;
      } else {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = response.data;

        dispatch(fetchUsers(users));
        return users;
      }
    },
  });
}

export const Table: React.FC = () => {
  const { status, isFetching } = useUsers();
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const headers = ['name', 'username', 'email', 'phone'];

  return (
    <>
      {status === 'pending' ? (
        <Loader />
      ) : status === 'error' ? (
        <div>Oops! Something went wrong. Please try again later.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full laptop:table-fixed">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={headers[index]} className="laptop:w-1/4 p-10 bg-cyan text-white text-left first:rounded-tl-medium last:rounded-tr-medium">
                    <div className="mb-4">
                      {header[0].toUpperCase() + header.slice(1)}
                    </div>
                    <Search field={headers[index]} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-x border-b border-grey">

            {users.length > 0 ? (
              users?.map((user: tUser) => {
                const { id, name, username, email, phone } = user;

                return (
                  <tr key={id} className="border-b border-grey">
                    <td className="laptop:w-1/4 p-10 truncate">{name}</td>
                    <td className="laptop:w-1/4 p-10 truncate">{username}</td>
                    <td className="laptop:w-1/4 p-10 truncate">
                      <a href={`mailto:${email}`}>{email}</a>
                    </td>
                    <td className="laptop:w-1/4 p-10 truncate">
                      <a href={`tel:+${phone}`}>{phone}</a>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={headers.length} className="p-10">
                  No results found.
                </td>
              </tr>
            )}
            </tbody>
          </table>

          <div>{isFetching && <Loader />}</div>
        </div>
      )}
    </>
  );
};
