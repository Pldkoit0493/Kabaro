import CardProduct from "../cards/card-product"
import { products } from '@/data/products'; // This is unused and can be removed.

type ProductProps = typeof products
export default function FrontHomeProducts({ products }: { products: ProductProps }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <CardProduct key={product.id} title={product.name} image={product.image} category={product.category} price={product.price} />
      ))}
    </section>
  )
}