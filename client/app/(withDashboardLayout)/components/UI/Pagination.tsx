import { Button, Pagination } from "@nextui-org/react";
import React from "react";

type TPaginationSoluationProps = {
  totalPage: number;
  setCurrentPage: (
    value: number
  ) => void | React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const PaginationSoluation: React.FC<TPaginationSoluationProps> = ({
  totalPage,
  setCurrentPage,
  currentPage,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-4 flex gap-x-6">
      <div className="flex flex-col gap-5 ">
        <Pagination
          total={totalPage}
          page={currentPage}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            disabled={currentPage <= 1}
            onClick={() => handlePreviousPage}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            disabled={currentPage >= totalPage}
            onClick={() => handleNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationSoluation;
