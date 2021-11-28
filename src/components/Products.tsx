/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
`;

interface ProductsProps {
  category: string;
  filters: Object;
  sort: string;
}
export interface ProductDocument {
  _id: string;
  name: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  img: { secure_url: string; id: string };
  categories: string[];
  size: string[];
  color: string[];
  price: number;
}

const Products: React.FC<ProductsProps> = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/v1/getAllProducts?category=${category}`
            : `http://localhost:5000/api/v1/getAllProducts`
        );
        setProducts(res.data.products);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters, category]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container className=' p-7'>
      {category
        ? filteredProducts.map((product: ProductDocument) => {
            return <Product img={product.img.secure_url} id={product._id} />;
          })
        : products.slice(0, 8).map((product: ProductDocument) => {
            return <Product img={product.img.secure_url} id={product._id} />;
          })}
    </Container>
  );
};

export default Products;
