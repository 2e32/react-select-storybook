import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select from '@2e32/react-select';

import { CreatableSelect, SearchableSelect } from './exampleComponents';
import * as options from './options';
import * as Icon from './assets/icons/svg';

import './assets/css/usage.css';

const meta = {
  title: 'Example/Select/usage',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexGrid: Story = {
  render: () => (
    <div className="container">
      <div className="row">
        <div className="col">
          <Select value={options.cities[0]} options={options.cities} block />
        </div>
        <div className="col">
          <Select value={options.cities[1]} options={options.cities} block />
        </div>
        <div className="col">
          <Select value={options.cities[2]} options={options.cities} block />
        </div>
      </div>
    </div>
  ),
};

const AddItemStory = () => {
  const [city, setCity] = useState<string | null>('London');
  const [items, setItems] = useState(options.cities);

  const handleAdd = (newItem: string) => {
    // Не допускаем добавления пустых элементов и дубликатов
    if (newItem.length && !items.includes(newItem)) {
      setItems((currItems) => currItems.concat(newItem));
    }
  };

  const handleClear = () => {
    setCity(null);
  };

  return (
    <CreatableSelect
      value={city}
      options={items}
      allowClear
      onCreate={handleAdd}
      onSelect={setCity}
      onClear={handleClear}
    />
  );
};

export const AddItem: Story = {
  render: () => <AddItemStory />,
};

const SearchItemStory = () => {
  const [city, setCity] = useState<string | null>('London');

  const handleClear = () => {
    setCity(null);
  };

  return (
    <SearchableSelect
      value={city}
      options={options.cities}
      allowClear
      onSelect={setCity}
      onClear={handleClear}
    />
  );
};

export const SearchItem: Story = {
  render: () => <SearchItemStory />,
};

export const Playlist: Story = {
  render: () => (
    <Select
      value={options.songs[0]}
      valueContent="song"
      options={options.songs}
      optionContent="song"
      prependIcon={<Icon.Music />}
      appendIcon={<Icon.Play />}
    />
  ),
};

export const Scroll: Story = {
  render: () => (
    <>
      <p>При скролле выпадающие опции сохраняют свою позицию относительно Select.</p>
      <div className="scroll-container">
        <div className="scroll-content">
          <Select value="Berlin" options={options.cities} open />
        </div>
      </div>
    </>
  ),
};
