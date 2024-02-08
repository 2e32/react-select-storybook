import { useCallback } from 'react';
import Select, { SelectProps, RenderMenuProps } from '@2e32/react-select';

import CreatableMenu from './CreatableMenu';

import './styles.css';

interface CreatableSelectProps<V, O> extends SelectProps<V, O> {
  onCreate: (newItem: string) => void;
}

const CreatableSelect = ({ onCreate, ...rest }: CreatableSelectProps<string, string>) => {
  const renderMenu = useCallback(
    (props: RenderMenuProps<string, string>) => {
      const { value, options, open, hideMenu, onSelect } = props;

      return (
        <CreatableMenu
          value={value}
          options={options}
          open={open}
          close={hideMenu}
          onCreate={onCreate}
          onSelect={onSelect}
        />
      );
    },
    [onCreate]
  );

  return <Select {...rest} className="creatable-select" renderMenu={renderMenu} />;
};

export default CreatableSelect;
