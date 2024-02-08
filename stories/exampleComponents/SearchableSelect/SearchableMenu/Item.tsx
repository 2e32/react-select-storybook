import React, { forwardRef, ComponentPropsWithRef } from 'react';
import cn from 'classnames';

interface ItemProps extends ComponentPropsWithRef<'div'> {
  item: string;
  selected?: boolean;
  disabled?: boolean;
  onItemClick: (item: string) => void;
}

const Item = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const { item, disabled = false, selected = false, className, onItemClick, ...rest } = props;

  // onMouseDown разрешено для любых элементов, в том числе disabled для сохранения фокуса селекта.
  // По этому на элемент не вешается pointer-events: none
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Предотвращаем потерю фокуса (onBlur) у сфокусированной части селекта,
    // т.к. элемент списка находится вне неё и щелчок по нему вызывает потерю фокуса.
    e.preventDefault();

    if (!disabled) onItemClick(item);
  };

  return (
    <div
      ref={ref}
      className={cn('searchable-menu__item', className, {
        'searchable-menu__item--selected': selected,
        'searchable-menu__item--disabled': disabled,
      })}
      onMouseDown={handleMouseDown}
      {...rest}
    />
  );
});

Item.displayName = 'Item';

export default Item;
