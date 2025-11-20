"use client";

import { useCart } from "@/context/cart-context"; // This path is now correct
import { Product } from "@/types";

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="mb-5 md:mb-5 lg:mb-6 xl:mb-8">
        <p className="font-medium text-base md:text-base lg:text-[17px] xl:text-lg mb-3">Size: <strong>L</strong></p>
        <div className="flex items-center gap-3 text-base text-[#111111]">
          <button className="h-[38px] md:h-[40px] lg:h-[42px] xl:h-[45px] w-[68px] md:w-[72px] lg:w-[78px] xl:w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">M</button>
          <button className="h-[38px] md:h-[40px] lg:h-[42px] xl:h-[45px] w-[68px] md:w-[72px] lg:w-[78px] xl:w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] bg-black text-white rounded-[35px]" type="button">L</button>
          <button className="h-[38px] md:h-[40px] lg:h-[42px] xl:h-[45px] w-[68px] md:w-[72px] lg:w-[78px] xl:w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">XL</button>
          <button className="h-[38px] md:h-[40px] lg:h-[42px] xl:h-[45px] w-[68px] md:w-[72px] lg:w-[78px] xl:w-[83px] flex items-center justify-center bg-[#F7F8F8]/50 border border-[#D0D0D0] rounded-[35px]" type="button">XXL</button>
        </div>
      </div>
      <div className="flex flex-nowrap items-center gap-x-4 font-medium text-base mb-5 md:mb-5 lg:mb-6 xl:mb-8">
        <button type="button" className="h-[43px] w-1/2 text-[#EB4A26] border border-[#EB4A26] rounded-full">Add To Wishlist</button>
        <button type="button" onClick={handleAddToCart} className="h-[43px] w-1/2 bg-[#EB4A26] text-white border border-[#EB4A26] rounded-full">Add To Cart</button>
      </div>
    </>
  );
}