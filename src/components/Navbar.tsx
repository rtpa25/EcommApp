/** @format */

import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

const Navbar = () => {
  return (
    <div className='h-24'>
      <div className='px-4 py-4 flex justify-between'>
        <div className='flex-1 flex items-center'>
          <span className='text-lg font-light cursor-pointer'>EN</span>
          <div className='border border-solid border-gray-300 flex items-center ml-10 p-2'>
            <input className='border-none' />
            <Search style={{ color: 'gray', fontSize: 19 }} />
          </div>
        </div>
        <div className='flex-1 text-center'>
          <h1 className='font-semibold text-4xl'>LAMA.</h1>
        </div>
        <div className='flex-1 flex items-center justify-end'>
          <div className='right-btn'>REGISTER</div>
          <div className='right-btn'>SIGN IN</div>
          <div className='right-btn'>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
