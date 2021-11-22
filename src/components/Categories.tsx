/** @format */

import { categories } from '../data';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div>
      {categories.map((item) => {
        return <CategoryItem />;
      })}
    </div>
  );
};

export default Categories;
