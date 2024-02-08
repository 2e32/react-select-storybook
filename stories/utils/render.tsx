import cn from 'classnames';
import type { RenderMenuProps, RenderOptionProps } from '@2e32/react-select';

import * as Icon from '../assets/icons/svg';

export const customRenderMenu = <V, O extends string | number>(props: RenderMenuProps<V, O>) => {
  const { options, getOptionProps } = props;

  return (
    <div className="custom-menu">
      {options.map((x, index) => {
        const { key, selected, disabled, onMouseDown } = getOptionProps(x, index);

        return (
          <div
            key={key}
            className={cn('custom-menu__item', {
              'custom-menu__item--active': selected,
              'custom-menu__item--disabled': disabled,
            })}
            onMouseDown={onMouseDown}
          >
            {x}
          </div>
        );
      })}

      <div className="custom-menu__arrow" />
    </div>
  );
};

export const customRenderOption = <O extends string | number>(props: RenderOptionProps<O>) => {
  const { option, optionProps } = props;
  const { key, selected, onMouseDown } = optionProps;

  return (
    <li key={key} className="checkable-item" onMouseDown={onMouseDown}>
      {selected && (
        <div className="checkable-item__check">
          <Icon.Check width={16} height={16} fill="#1867c0" />
        </div>
      )}
      {option}
    </li>
  );
};

interface RenderProps {
  search: string;
  onAdd?: () => void;
}

export const renderAddEmpty = ({ search, onAdd }: RenderProps) => (
  <li className="e-select__empty pointer" onClick={onAdd}>
    <span>Add {`"${search}"`}</span>
  </li>
);

export const renderCreateEmpty = ({ search, onAdd }: RenderProps) => (
  <li className="e-select__empty">
    <div className="creatable-empty">
      <span>
        Create <span className="creatable-empty__chip">{search}</span>
      </span>

      <div className="creatable-empty__action">
        <button tabIndex={-1} onClick={onAdd}>
          <Icon.Plus />
        </button>
      </div>
    </div>
  </li>
);

export const renderNewEmpty = ({ search }: RenderProps) => (
  <li className="e-select__empty">
    No results matching <strong>{`"${search}"`}</strong>. Press <kbd>enter</kbd> to create a new one
  </li>
);
