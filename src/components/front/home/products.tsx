import CardProduct from "../cards/card-product"
import { Product } from "@/types";


export default function FrontHomeProducts({ products }: { products: Product[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <CardProduct key={product.id} {...product} />
      ))}
    </section>
  )
}