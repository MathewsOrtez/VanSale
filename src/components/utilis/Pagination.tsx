import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const CustomPagination: React.FC<{
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}> = ({ totalItems, itemsPerPage, onPageChange, currentPage, setItemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalItems, "totalItems");
  console.log(currentPage, "currentPage");

  const countPerPage = [10,20,30]
  return (   
    <div className="flex w-full   px-4  items-center justify-between p-2 border rounded-md my-2 flex-wrap gap-4 ">
      <div className="text-gray-600 text-sm">
        Showing {(currentPage - 1) * itemsPerPage + 1}-
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
        Entries
      </div>
      <div>
      <Pagination 
      count={totalPages}
      color="primary"
      variant="outlined"
      shape="rounded"
      size="small"
      showFirstButton
      showLastButton
      onChange={onPageChange}
      renderItem={(item) => (
        <PaginationItem sx={{border:1,borderColor: "#2080be",borderRadius: "10px",margin: "0 8px"}}
          {...item}
          slots={{
            
            previous: () => (
              <div className="flex justify-center gap-2 items-center text-[#2080be]">
                <KeyboardArrowLeftIcon fontSize="small"  />
                Prev
              </div>
            ),
            next: () => (
              <div className="flex justify-center gap-2 items-center text-[#2080be]">
                Next
                <KeyboardArrowRightIcon fontSize="small" />
              </div>
            ),
            first: () => (
              <div className="flex justify-center gap-2 items-center text-[#2080be]">
                <KeyboardDoubleArrowLeftIcon fontSize="small"/>
                First
              </div>
            ),
            last: () => (
              <div className="flex justify-center gap-2 items-center text-[#2080be]">
                Last
                <KeyboardDoubleArrowRightIcon fontSize="small" />
              </div>
            ),
          }}
        />
      )}
    />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value));
          }}
          className=" p-1 border text-[#2080be]  border-[#2080be] rounded-md cursor-pointer"
        >
          {countPerPage.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="text-gray-600 text-sm">Items per page</span>
      </div>
    </div>
  );
};

export default CustomPagination;
