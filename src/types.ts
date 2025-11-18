export type Product = {
  id: string;
  name: string;
  brandId?: number;
  category: string;
  description?: string;
  price: number;
  image: string;
  created_at?: string;
  total_buy?: number;
  colors?: string[];
  slug?: string;
};

export type CardProductProps = Product & {
  isSwiper?: boolean | undefined;
}