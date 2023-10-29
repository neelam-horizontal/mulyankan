import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';

const Products = () => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await (await fetch('https://dummyjson.com/products')).json();
    setProducts(res);
  };
  //

  //console.log('SSR', products?.products);
  //const prodJson = JSON.parse(products);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between">
        {products?.products?.map((product: any, index: number) => {
          return (
            <>
              {
                <div className="flex-auto w-[30%] min-h-[15em] max-h-10">
                  <Link
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {product.description}
                    </p>
                  </Link>
                </div>
              }
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
