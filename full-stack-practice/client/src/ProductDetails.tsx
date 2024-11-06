import { useEffect, useState } from 'react';
import { type Product } from './Catalog';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProducts] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = (await response.json()) as Product;
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { imageUrl, name, price, shortDescription, longDescription } = product;

  const handleNav = () => {
    alert(`Added ${name} to cart`);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="pd-h2">{name}</h2>
          </div>
          <div className="px-4">
            <p className="pd-text">{shortDescription}</p>
            <p className="pd-text">{'$' + (price / 100).toFixed(2)}</p>
            <p className="pd-text">{longDescription}</p>
          </div>
        </div>
        <button onClick={handleNav}>Add To Cart</button>
      </div>
    </div>
  );
}
