import React, { useState, useEffect, useRef } from 'react';

interface FooterProps {
  open?: boolean;
  onCreate: (newItem: string) => void;
}

const Footer = ({ open, onCreate }: FooterProps) => {
  const [str, setStr] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) setStr('');
  }, [open]);

  const create = () => {
    const trimmed = str.trim();

    if (trimmed.length === 0) {
      setStr('');
      inputRef.current?.focus();
    } else {
      onCreate(trimmed);
      setStr('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStr(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'NumpadEnter'].includes(e.code)) create();
  };

  const handleClick = () => {
    create();
  };

  return (
    <div className="creatable-menu__footer">
      <input
        ref={inputRef}
        value={str}
        placeholder="Create new item"
        className="creatable-menu__input"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button className="creatable-menu__button" onClick={handleClick}>
        Create
      </button>
    </div>
  );
};

export default Footer;
