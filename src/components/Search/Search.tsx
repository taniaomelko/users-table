import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { filterUsers } from '../../redux/actions';
import { CrossIcon } from '../icons';

type SearchProps = {
  field: string;
}

export const Search: React.FC<SearchProps> = ({ field }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers(field, e.target.value));
  };

  const clearInput = () => {
    dispatch(filterUsers(field, ''));
  };

  return (
    <div className="relative">
      <input
        className="block w-full min-w-150 pr-20 border-solid border-b border-b-grey text-14 font-normal transition-colors placeholder:text-grey focus:border-b-white"
        type="text"
        value={filters[field] || ''}
        onChange={handleChange}
        placeholder={`Search by ${field}`}
      />
      {filters[field] && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-small text-white transition-colors hover:text-grey focus:ring-1 focus:ring-white"
          onClick={clearInput}
        >
          <CrossIcon />
        </button>
      )}
    </div>
  );
};
