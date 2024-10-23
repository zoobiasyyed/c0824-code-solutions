import { useEffect, useState } from 'react';
import { type Product, readProduct } from './lib/';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProducts] = useState<Product | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProductDetails(productId: number) {
      try {
        const product = await readProduct(productId);
        setProducts(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProductDetails(+productId);
      {
        /*even tho itemId is stored as a string, it is parsed as a number to be used later */
      }
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
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
            <p className="pd-text">{price}</p>
            <p className="pd-text">{longDescription}</p>
          </div>
        </div>
        <button onClick={handleNav}>Save</button>
      </div>
    </div>
  );
}
