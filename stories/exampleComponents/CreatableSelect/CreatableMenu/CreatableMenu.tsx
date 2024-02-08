import React, { useRef } from 'react';

import Item from './Item';
import Footer from './Footer';

interface CreatableMenuProps {
  value?: string | null;
  options: string[];
  open?: boolean;
  close: () => void;
  onCreate: (newItem: string) => void;
  onSelect?: (selectedItem: string, option: string) => void;
}

const CreatableMenu = (props: CreatableMenuProps) => {
  const { value, options, open, close, onCreate, onSelect } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (option: string) => {
    if (option !== value) onSelect?.(option, option);

    close();
  };

  const renderedItems = options.map((option: string) => {
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

  const handleMenuBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const related = e.relatedTarget as Node;
    const hasChild = menuRef.current?.contains(related);

    // Если элемент, который приобрел фокус не внутри меню - закрываем меню
    if (!hasChild) close();
  };

  return (
    <div ref={menuRef} className="creatable-menu" onBlur={handleMenuBlur}>
      {renderedItems}
      <div className="creatable-menu__divider" />
      <Footer open={open} onCreate={onCreate} />
    </div>
  );
};

export default CreatableMenu;
