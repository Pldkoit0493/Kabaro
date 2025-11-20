"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AsideFilter.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { products } from "@/data/products";

export default function AsideFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get('category');
  const categories = Array.from(new Set(products.map(product => product.category))).sort();

  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const priceGap = 1000;

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minPrice / 10000) * 100}%`;
      progressRef.current.style.right = `${100 - (maxPrice / 10000) * 100}%`;
    }
  }, [minPrice, maxPrice]);

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  const handleRangeMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleRangeMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  const handleApplyPrice = () => {
    // Create a mutable copy of the current search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // Set the new price values
    current.set('minPrice', String(minPrice));
    current.set('maxPrice', String(maxPrice));

    const query = current.toString();
    router.push(`${pathname}?${query}`);
  };

  return (
    <aside className="flex-none hidden md:w-[220px] lg:w-[240px] xl:w-[267px] md:flex flex-col gap-y-5 lg:gap-y-5 xl:gap-y-6">
      <div>
        <h3 className="font-medium text-base text-[#151515] md:mb-3 lg:mb-4">Categories</h3>
        <div className="flex flex-col gap-y-3 text-sm md:text-base text-[#A3A3A3]">
          <Link
            href={pathname} // Link to /product without any category param
            className={!currentCategory ? 'text-[#171717] font-semibold' : 'hover:text-[#171717]'}
          >
            All Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`${pathname}?category=${category.toLowerCase()}`}
              className={currentCategory === category.toLowerCase() ? 'text-[#171717] font-semibold capitalize' : 'hover:text-[#171717] capitalize'}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-[#F4F6F8]"></div>
      <div>
        <h3 className="font-medium text-base text-[#151515] md:mb-3 lg:mb-4">Price</h3>
        <div className="w-full relative">
          <Image className="w-full h-auto" src="/images/product-prince-range.svg" alt="Price Indicator" priority={true} height={57} width={254} />
          <div className={styles.slider}>
            <div ref={progressRef} className={styles.progress}></div>
          </div>
          <div className={styles.rangeInput}>
            <input
              type="range"
              className={`${styles.rangeMin} ${styles.rangeThumb}`}
              min="0"
              max="10000"
              value={minPrice}
              step="100"
              onChange={handleRangeMinChange}
            />
            <input
              type="range"
              className={`${styles.rangeMax} ${styles.rangeThumb}`}
              min="0"
              max="10000"
              value={maxPrice}
              step="100"
              onChange={handleRangeMaxChange}
            />
          </div>
          <div className={`${styles.priceInput} gap-x-5 mt-2`}>
            <div className={styles.field}>
              <input
                type="number"
                className={`${styles.inputMin} ${styles.noSpinButton} font-semibold text-sm text-[#171717]`}
                value={minPrice}
                onChange={handleMinInputChange}
              />
            </div>
            <div className={styles.field}>
              <input
                type="number"
                className={`${styles.inputMax} ${styles.noSpinButton} font-semibold text-sm text-[#171717]`}
                value={maxPrice}
                onChange={handleMaxInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleApplyPrice} className="w-full py-1.5 rounded-full border border-[#EB4A26] hover:bg-[#EB4A26] text-center font-medium text-sm text-[#EB4A26] hover:text-white transition-colors duration-200">
        Apply Price
      </button>
    </aside>
  );
}
