import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

import MagnifyIcon from './MagnifyIcon';

const SearchInput = ({ className, ...rest }: ComponentPropsWithoutRef<'input'>) => {
  return (
    <div className="search-box">
      <input className={cn('search-box__input', className)} {...rest} />
      <MagnifyIcon className="search-box__icon" />
    </div>
  );
};

export default SearchInput;
