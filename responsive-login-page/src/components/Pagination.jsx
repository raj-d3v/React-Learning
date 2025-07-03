import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center mt-6">
      <div>
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer"
        >
          <ArrowLeft />
          Previous
        </Button>
      </div>

      <div className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 rounded ${
              number === currentPage
                ? "bg-[#EFF1F4] text-[#091E42]"
                : "bg-white"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      <div>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          className="cursor-pointer"
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
