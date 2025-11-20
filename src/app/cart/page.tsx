"use client";

import { useCart } from "@/context/cart-context"; // This path should now resolve to the correct file
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="w-full py-16">
        <div className="container text-center px-5">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/product" className="bg-[#EB4A26] text-white py-3 px-6 rounded-full font-medium hover:bg-opacity-90">
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-10">
      <div className="container px-5 md:px-6 lg:px-8 xl:px-10">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4 border-b pb-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={`/images/${product.image}`}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 text-sm font-medium mt-1 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="h-8 w-8 border rounded-full flex items-center justify-center"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="h-8 w-8 border rounded-full flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-24 text-right font-semibold">
                    ${(product.price * quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="border rounded-lg p-6 bg-gray-50 sticky top-28">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 bg-[#EB4A26] text-white py-3 rounded-full font-medium hover:bg-opacity-90">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
