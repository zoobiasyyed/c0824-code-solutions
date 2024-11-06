import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { toDollars } from './lib/';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = (await response.json()) as Product[];
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 id="catalog-h1">Catalog</h1>
      <hr className="" />
      <div className="productsMap">
        {products?.map((product) => (
          <div key={product.productId} className="">
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ItemCard({ product }: CardProps) {
  return (
    <Link to={`/product-details/${product.productId}`} className="itemCard">
      <div className="itemCard">
        <img className="product-image" src={product.imageUrl}></img>
        <h5 className="">{product.name}</h5>
        <h6>{'$' + (product.price / 100).toFixed(2)}</h6>
        <h6>{product.shortDescription}</h6>
      </div>
    </Link>
  );
}
