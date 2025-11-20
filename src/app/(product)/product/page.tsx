import AsideFilter from "@/components/front/aside-filter";
import Breadcrumb from "@/components/front/breadcrumb";
import CardProduct from "@/components/front/cards/card-product";
import FrontProductsFilter from "@/components/front/home/products-filter";
import Pagination from "@/components/front/pagination";
import type { Metadata } from "next";
import { products } from "@/data/products"; // Assuming this matches the Product type
import { Product } from "@/types"; // Assuming this matches the Product type
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products Fashion"
};

function ProductListingContent({ searchParams }: { searchParams: { category?: string } }) {
  const selectedCategory = searchParams.category;

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  const headingText = selectedCategory ? `Category: ${selectedCategory}` : "All Products";

  return (
    <>
      <section className="w-full">
        <div className="container py-6 md:gap-x-6 px-5 md:px-6 lg:px-8 xl:px-10">
          <Breadcrumb category={selectedCategory} />
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4">
            <h1 className="text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-[#171717] leading-[40px] capitalize">{headingText} ({filteredProducts.length})</h1>
            <FrontProductsFilter isShowCategory={false} isShowShortBy={true} isShowFilter={false} />
          </div>
        </div>
      </section>
      <div className="w-full px-4 pt-10 pb-16">
        <div className="container flex flex-nowrap items-start md:gap-x-6 md:px-5 lg:px-6 xl:px-10">
          <AsideFilter />
          <div className="hidden md:block flex-none h-full w-px bg-[#EFEFEF]"></div>
          <main className="grow">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {filteredProducts.map((product: Product) => (
                <CardProduct key={product.id} {...product} />
              ))}
            </div>
            <Pagination />
          </main>
        </div>
      </div>
    </>
  )
}

export default function Page({ searchParams }: { searchParams: { category?: string } }) {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductListingContent searchParams={searchParams} />
    </Suspense>
  );
}