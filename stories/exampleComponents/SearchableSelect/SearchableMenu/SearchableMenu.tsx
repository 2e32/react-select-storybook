import React, { useState, useMemo } from 'react';

import SearchInput from './SearchInput';
import Item from './Item';

interface SearchableMenuProps {
  value?: string | null;
  options: string[];
  close: () => void;
  onSelect?: (selectedItem: string, option: string) => void;
}

const includesSubstring = (sting: string, searchString: string) => {
  const index = sting.toLowerCase().indexOf(searchString);

  return index > -1;
};

const SearchableMenu = (props: SearchableMenuProps) => {
  const { value, options, close, onSelect } = props;

  const [searchStr, setSearchStr] = useState('');

  const filteredOptions = useMemo(() => {
    const lowerSearch = searchStr.trim().toLowerCase();

    return lowerSearch.length === 0
      ? options
      : options.filter((option: string) => includesSubstring(option, lowerSearch));
  }, [searchStr, options]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  const handleItemClick = (option: string) => {
    if (option !== value) onSelect?.(option, option);

    close();
  };

  const renderedItems = filteredOptions.map((option: string) => {
    const selected = value === option;
    const disabled = option.length < 5;

    return (
      <Item
        key={option}
        item={option}
        selected={selected}
        disabled={disabled}
        onItemClick={handleItemClick}
      >
        {option}
      </Item>
    );
  });

  return (
    <div className="searchable-menu">
      <SearchInput value={searchStr} placeholder="Search" onChange={handleSearchChange} />
      {renderedItems}
    </div>
  );
};

export default SearchableMenu;
