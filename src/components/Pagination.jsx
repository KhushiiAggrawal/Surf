import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PAGE_LIMIT } from "../app/constants";

const Pagination = ({ pageChange, page, totalItems, productTop }) => {
  const scrollToSection = () => {
    const section = productTop.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <p
            onClick={() => {
              if (page !== 1) {
                pageChange(page - 1);
                scrollToSection();
              }
            }}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </p>
          <p
            onClick={() => {
              if (page !== Math.ceil(totalItems / PAGE_LIMIT)) {
                pageChange(page + 1);
                scrollToSection();
              }
            }}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </p>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">{(page - 1) * PAGE_LIMIT + 1}</span>{" "}
              to{" "}
              <span className="font-medium">
                {page * PAGE_LIMIT > totalItems
                  ? totalItems
                  : page * PAGE_LIMIT}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <p
                onClick={() => {
                  if (page !== 1) {
                    pageChange(page - 1);
                    scrollToSection("productTop");
                  }
                }}
                className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
              {Array.from({ length: Math.ceil(totalItems / PAGE_LIMIT) }).map(
                (elem, idx) => (
                  <p
                    aria-current="page"
                    key={idx}
                    onClick={() => {
                      pageChange(idx + 1);
                      scrollToSection("productTop");
                    }}
                    className={
                      idx + 1 == page
                        ? "cursor-pointer relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        : "cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    }
                  >
                    {idx + 1}
                  </p>
                )
              )}
              <p
                onClick={() => {
                  if (page !== Math.ceil(totalItems / PAGE_LIMIT)) {
                    pageChange(page + 1);
                    scrollToSection();
                  }
                }}
                className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
