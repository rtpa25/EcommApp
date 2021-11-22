/** @format */

import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className='flex justify-between p-7'>
      {categories.map((item) => {
        return <CategoryItem img={item.img} title={item.title} id={item.id} />;
      })}
    </div>
  );
};

export default Categories;
