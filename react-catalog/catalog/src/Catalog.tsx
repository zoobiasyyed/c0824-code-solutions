import { useEffect, useState } from 'react';
import { type Product, readCatalog, toDollars } from './lib/';
import { Link } from 'react-router-dom';
// import { toDollars } from './lib/';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
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
        <h6>{toDollars(product.price)}</h6>
        <h6>{product.shortDescription}</h6>
      </div>
    </Link>
  );
}
