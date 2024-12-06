import PaginationSoluation from '@/app/(withDashboardLayout)/components/UI/Pagination';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pagination = ({data,currentPage,totalPage,setCurrentPage}:{data:any,currentPage:number, totalPage:number,setCurrentPage:any}) => {
    console.log("pagination: ",data)
    return (
        <div>
           <div className="flex justify-between items-center my-4">
        <p>Showing 1 to 10 of 10 entries</p>
        <PaginationSoluation currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage}/>
      </div>
        </div>
    );
};

export default Pagination;