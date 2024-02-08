import Select, { SelectProps, RenderMenuProps } from '@2e32/react-select';

import SearchableMenu from './SearchableMenu';

import './styles.css';

const renderMenu = (props: RenderMenuProps<string, string>) => {
  const { value, originOptions, hideMenu, onSelect } = props;

  return (
    <SearchableMenu
      value={value}
      options={Array.isArray(originOptions) ? originOptions : []}
      close={hideMenu}
      onSelect={onSelect}
    />
  );
};

const SearchableSelect = (props: SelectProps<string, string>) => {
  return <Select {...props} className="searchable-select" renderMenu={renderMenu} />;
};

export default SearchableSelect;
