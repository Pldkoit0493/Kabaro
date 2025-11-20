import Link from "next/link";

interface BreadcrumbProps {
  category?: string;
}

export default function Breadcrumb({ category }: BreadcrumbProps) {
  // Helper function to capitalize the first letter
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="flex items-center gap-x-1 md:gap-x-2 font-medium text-xs sm:text-sm md:text-base text-[#A3A3A3]">
      <Link href="/">Home</Link>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16L14 12L10 8" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Link href="/product" className={!category ? 'text-[#171717]' : ''}>Product</Link>
      {category && (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16L14 12L10 8" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#171717] capitalize">{capitalize(category)}</span>
        </>
      )}
    </div>
  )
}