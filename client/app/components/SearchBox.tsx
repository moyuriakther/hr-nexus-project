import React from 'react';
import HRForm from './Form/HRForm';
import HRInput from './Form/HRInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchBox = ({handleSearchNotice}:any) => {
    return (
        <div>
             <HRForm onSubmit={handleSearchNotice}>
      <div className="mb-5 text-md font-semibold flex gap-1 items-center">
        <label>Search: </label>
        <HRInput
          type="text"
          className="border-primary h-10 rounded-[5px]"
          placeholder="Notice Search..."
          name="search"
        />
      </div>
    </HRForm>
        </div>
    );
};

export default SearchBox;