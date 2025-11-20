"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to create page URLs while preserving other search params (like category/price)
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null; // Don't show pagination if there's only one page
  }

  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="h-[32px] w-full flex justify-center items-center gap-x-2 md:gap-x-2.5 lg:gap-x-3 text-base text-[#171717]">
      <Link
        href={createPageURL(currentPage - 1)}
        className={clsx("h-full hover:bg-[#171717]/5 flex items-center justify-center gap-x-1 md:gap-x-1.5", {
          'pointer-events-none text-gray-400': currentPage === 1,
        })}
      >
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9863 8L10.9863 12L14.9863 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Previous
      </Link>

      {allPages.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={clsx("h-full w-[32px] flex items-center justify-center rounded-full border", {
            'bg-[#171717] text-white border-[#171717]': currentPage === page,
            'hover:bg-[#171717]/5 border-[#E5E5E5]': currentPage !== page,
          })}
        >{page}</Link>
      ))}

      <Link
        href={createPageURL(currentPage + 1)}
        className={clsx("h-full hover:bg-[#171717]/5 flex items-center justify-center gap-x-1 md:gap-x-1.5", {
          'pointer-events-none text-gray-400': currentPage >= totalPages,
        })}
      >
        Next
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9863 16L14.9863 12L10.9863 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}