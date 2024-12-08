import React from 'react';
import HRForm from './Form/HRForm';
import HRInput from './Form/HRInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchBox = ({HandleSearchData}:any) => {
    return (
        <div>
             <HRForm onSubmit={HandleSearchData}>
      <div className="text-md  flex gap-1 items-center">
        <label className='text-sm mt-1'>Search: </label>
        <HRInput
          type="text"
          className="border-primary h-8 rounded-[5px]"
          placeholder="Search..."
          name="search"
        />
      </div>
    </HRForm>
        </div>
    );
};

export default SearchBox;