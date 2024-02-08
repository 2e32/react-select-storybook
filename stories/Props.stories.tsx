import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select from '@2e32/react-select';
import '@2e32/react-select/css';

import { Fruit, Currency } from './types';

import * as Icon from './assets/icons/svg';
import * as options from './options';

import {
  log,
  Pre,
  renderUserAsChip,
  renderUserAsDetails,
  renderSubjectOption,
  renderColorOption,
  renderLangOption,
  renderUserOption,
  optionLangDisabled,
  EmptyOptionContent,
  sortByName,
  sortByAge,
  customRenderMenu,
  customRenderOption,
  renderAddEmpty,
  renderCreateEmpty,
  renderNewEmpty,
} from './utils';

import './assets/css/props.css';

const meta = {
  title: 'Example/Select/props',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Select>;

export default meta;

const firstCity = options.cities[0];
const firstFruit = options.fruits[0];
const firstUser = options.users[0];

type Story = StoryObj<typeof meta>;

export const Value: Story = {
  name: 'value',
  render: () => (
    <>
      <p>
        <code>value</code> - отсутствует (nullable).
      </p>
      <Select value={null} />
      <Select value={undefined} />

      <p>
        <code>value</code> - строка.
      </p>
      <Select value="Paris" />

      <p>
        <code>value</code> - число.
      </p>
      <Select value={10} />

      <p>
        <code>value</code> - объект.
      </p>
      <Select
        value={{ bookId: 5, title: 'Don Quixote', year: 1605, authorId: 4 }}
        valueContent="title"
      />
    </>
  ),
};

export const ValueContent: Story = {
  name: 'valueContent',
  render: () => (
    <>
      <p>
        <code>valueContent</code> не указан. Отображается выбранное значение.
      </p>
      <Pre>{firstCity}</Pre>
      <Select value={firstCity} />

      <p>
        <code>valueContent</code> - строка, указывающая имя свойства в объекте, которое необходимо
        отобразить.
      </p>
      <Pre>{firstFruit}</Pre>
      <Select value={firstFruit} valueContent="name" />

      <p>
        <code>valueContent</code> - функция отображения значения.
      </p>
      <Pre>{firstUser}</Pre>
      <Select value={firstUser} valueContent={renderUserAsChip} />
      <Select value={firstUser} valueContent={renderUserAsDetails} />
    </>
  ),
};

export const Placeholder: Story = {
  name: 'placeholder',
  args: { placeholder: 'Select user' },
};

export const Options: Story = {
  name: 'options',
  render: () => (
    <>
      <p>
        <code>options</code> - массив строк.
      </p>
      <Select options={options.cities} />

      <p>
        <code>options</code> - массив чисел.
      </p>
      <Select options={options.itemsPerPage} />

      <p>
        <code>options</code> - массив объектов.
      </p>
      <Select options={options.countries} optionContent="text" />
    </>
  ),
};

export const OptionKey: Story = {
  name: 'optionKey',
  render: () => (
    <>
      <p>
        <code>optionKey</code> не указан. Т.к. ключ не указан и значение опции примитивное (строка
        или число), то оно используется в качестве ключа.
      </p>
      <Select options={options.cities} />

      <p>
        <code>optionKey</code> не указан. Т.к. ключ не указан и значение опции - это объект, то
        индекс опции в списке используется в качестве ключа.
      </p>
      <Select options={options.songs} optionContent="song" />

      <p>
        <code>optionKey</code> - строка, указывающая имя свойства в объекте, которое необходимо
        использовать в качестве ключа.
      </p>
      <Select options={options.books} optionKey="bookId" optionContent="title" />

      <p>
        <code>optionKey</code> - функция вычисления ключа.
      </p>
      <Select options={options.pets} optionKey={(option, index) => `${option}${index}`} />
    </>
  ),
};

export const OptionContent: Story = {
  name: 'optionContent',
  render: () => (
    <>
      <p>
        <code>optionContent</code> не указан. Отображается значение опции.
      </p>
      <Select options={options.sizes} />

      <p>
        <code>optionContent</code> - строка, указывающая имя свойства в объекте, которое необходимо
        отобразить.
      </p>
      <Select options={options.fruits} optionContent="name" />

      <p>
        <code>optionContent</code> - функция отображения значения.
      </p>
      <Select options={options.schoolSubjects} optionContent={renderSubjectOption} />
      <Select options={options.colors} optionContent={renderColorOption} />
    </>
  ),
};

const OptionValueStory = () => {
  const [framework, setFramework] = useState<string | null>(null);
  const [fruit, setFruit] = useState<Fruit>();
  const [sportGuid, setSportGuid] = useState<string>();

  return (
    <>
      <p>
        <code>optionValue</code> не указан. При выборе опции возвращается сам элемент опции.
      </p>
      <Pre>{framework}</Pre>
      <Select value={framework} options={options.frameworks} onSelect={setFramework} />

      <Pre>{fruit}</Pre>
      <Select
        value={fruit}
        valueContent="name"
        options={options.fruits}
        optionKey="id"
        optionContent="name"
        isValueEqualOption={(value, option) => value?.id === option.id}
        onSelect={setFruit}
      />

      <p>
        <code>optionValue</code> - строка, указывающая значение какого свойства объекта необходимо
        возвращать при выборе опции.
      </p>
      <Pre>{sportGuid}</Pre>
      <Select
        value={sportGuid}
        valueContent={(selectedGuid?: string) => {
          // Тут вроде не может приходить нуллейбл значение, надо пропустить
          if (selectedGuid == null) return null;

          return options.sportTypes.find((x) => x.guid === selectedGuid)?.name;
        }}
        options={options.sportTypes}
        optionKey="guid"
        optionContent="name"
        isValueEqualOption={(selectedGuid: string | null | undefined, option) =>
          selectedGuid === option.guid
        }
        onSelect={setSportGuid}
      />
    </>
  );
};

export const OptionValue: Story = {
  name: 'optionValue',
  render: () => <OptionValueStory />,
};

export const OptionDisabled: Story = {
  name: 'optionDisabled',
  render: () => (
    <Select
      options={options.programmingLanguages}
      optionContent={renderLangOption}
      optionDisabled={optionLangDisabled}
    />
  ),
};

const IsValueEqualOptionStory = () => {
  const [currency, setCurrency] = useState<Currency>();

  return (
    <>
      <div className="alert-info">
        Внимание! Используйте <code>isValueEqualOption</code> для сравнения <code>value</code> и
        опции, если они в виде объектов или представлены разными типами. По умолчанию они
        сравниваются с помощью <code>Object.is</code>.
        <br />
        Типичные случаи, когда следует применять <code>isValueEqualOption</code>:
        <ul>
          <li>
            из <code>onSelect</code> возвращается копия выбранного значения (клон опции);
          </li>
          <li>
            при инициализации Select данными, если значение и опции из разных источников. Например,
            значение было загружено из одного ресурса - <code>/api/card/4</code>, а опции из другого
            - <code>/api/dictionaries/users</code>;
          </li>
          <li>выбранное значение представлено примитивом (id, guid, code), а опция объектом.</li>
        </ul>
        Это влияет на правильное определение свойства <code>selected</code> для опции и связанную с
        этим логику обработки, визуальное отображение.
      </div>

      <Pre>{currency}</Pre>
      <p>
        Select записывает в state значение. Ссылка значения и ссылка значения опции совпадают. По
        этому в выпающих опциях корректно подсвечивается выбранная опция. Обратите внимание, что
        свойство <code>isValueEqualOption</code> не указано.
      </p>
      <Select
        value={currency}
        valueContent="label"
        options={options.currencies}
        optionKey="code"
        optionContent="label"
        onSelect={(selectedCurrency) => {
          // Записываем в состояние оригинальную опцию, ссылка сохраняется
          setCurrency(selectedCurrency);
        }}
      />

      <p>
        Select записывает в state копию значения (ссылка изменена и не совпадает ни с одной из
        ссылок из опций). Обратите внимание на первый Select: у него есть значение, но оно не
        подсвечено в списке опций как выбранное, т.к. значение и опция сравниваются по ссылке, а они
        разные.
      </p>
      <Select
        value={currency}
        valueContent="label"
        options={options.currencies}
        optionKey="code"
        optionContent="label"
        isValueEqualOption={(value, option) => value?.code === option.code}
        onSelect={(selectedCurrency) => {
          // Записываем в состояние копию, ссылка не сохраняется
          setCurrency({ ...selectedCurrency });
        }}
      />
    </>
  );
};

export const IsValueEqualOption: Story = {
  name: 'isValueEqualOption',
  render: () => <IsValueEqualOptionStory />,
};

export const NoOptionsContent: Story = {
  name: 'noOptionsContent',
  render: () => (
    <>
      <p>
        <code>noOptionsContent</code> не указан. Выводится значение по умолчанию.
      </p>
      <Select />

      <p>
        <code>noOptionsContent</code> - строка.
      </p>
      <Select noOptionsContent="No data" />

      <p>
        <code>noOptionsContent</code> - компонент для отображения содержимого.
      </p>
      <Select noOptionsContent={<EmptyOptionContent />} />

      <p>
        <code>noOptionsContent</code> - falsy значение (кроме undefined) приводит к скрытию пустой
        опции.
      </p>
      <Select noOptionsContent={false} />
      <Select noOptionsContent={null} />
      <Select noOptionsContent={''} />
      <Select noOptionsContent={0} />
    </>
  ),
};

export const ClassName: Story = {
  name: 'className',
  args: { value: 'Firefox', options: options.browsers, className: 'custom-font' },
};

export const Style: Story = {
  name: 'style',
  args: { options: options.browsers, style: { color: 'red' } },
};

export const Disabled: Story = {
  name: 'disabled',
  render: () => (
    <>
      <p>
        Select без <code>value</code>.
      </p>
      <Select disabled />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <Select placeholder="Select value..." disabled />
      <p>
        Select с <code>value</code>.
      </p>
      <Select value="Berlin" disabled />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <Select value="Berlin" options={options.cities} open disabled />
    </>
  ),
};

export const ReadOnly: Story = {
  name: 'readOnly',
  render: () => (
    <>
      <p>
        Select без <code>value</code>.
      </p>
      <Select readOnly />
      <p>
        Select с <code>placeholder</code>.
      </p>
      <Select placeholder="Select value..." readOnly />
      <p>
        Select с <code>value</code>.
      </p>
      <Select value="Berlin" readOnly />
      <p>
        Select с <code>open</code>. Это свойство игнорируется и выпадающие опции скрыты.
      </p>
      <Select value="Berlin" options={options.cities} open readOnly />
    </>
  ),
};

export const AutoFocus: Story = {
  name: 'autoFocus',
  args: { options: options.cities, autoFocus: true, onFocus: () => log('Focused') },
};

export const AllowClear: Story = {
  name: 'allowClear',
  args: { value: firstCity, allowClear: true },
};

export const Block: Story = {
  name: 'block',
  args: { block: true },
};

export const Loading: Story = {
  name: 'loading',
  args: { loading: true },
};

const OpenStory = () => {
  const [city, setCity] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleChange = (option: string | null) => {
    setCity(option);
  };

  const handleOpenChange = (isOpen: boolean) => {
    log(`Сontrolled Change to ${isOpen}`);
    setOpen(isOpen);
  };

  return (
    <>
      <p>
        Select с <strong>неконтролируемым</strong> состоянием <code>open</code> (оно внутреннее и
        Select сам им управляет).
      </p>
      <Select
        value={city}
        options={options.cities}
        allowClear
        onOpenChange={(isOpen: boolean) => log(`Uncontrolled Change to ${isOpen}`)}
        onChange={handleChange}
      />

      <p>
        Select с <strong>контролируемым</strong> состоянием <code>open</code> (управляем им
        вручную).
      </p>
      <Select
        value={city}
        options={options.cities}
        open={open}
        allowClear
        onOpenChange={handleOpenChange}
        onChange={handleChange}
      />
    </>
  );
};

export const Open: Story = {
  name: 'open',
  render: () => <OpenStory />,
};

const CloseOnSelectStory = () => {
  const [city, setCity] = useState<string>();

  return <Select value={city} options={options.cities} closeOnSelect={false} onSelect={setCity} />;
};

export const CloseOnSelect: Story = {
  name: 'closeOnSelect',
  render: () => <CloseOnSelectStory />,
};

const CloseOnСlickOutsideStory = () => {
  const [city, setCity] = useState<string>();

  return (
    <Select value={city} options={options.cities} closeOnClickOutside={false} onSelect={setCity} />
  );
};

export const CloseOnСlickOutside: Story = {
  name: 'closeOnСlickOutside',
  render: () => <CloseOnСlickOutsideStory />,
};

const DropdownIconStory = () => {
  const [open, setOpen] = useState(false);

  const iconStyle = open ? { transform: 'rotateX(180deg)' } : undefined;

  return (
    <Select
      value={firstCity}
      options={options.cities}
      open={open}
      dropdownIcon={<Icon.ChevronDown style={iconStyle} />}
      onOpenChange={setOpen}
    />
  );
};

export const DropdownIcon: Story = {
  name: 'dropdownIcon',
  render: () => <DropdownIconStory />,
};

export const LoadingIcon: Story = {
  name: 'loadingIcon',
  render: () => (
    <>
      <Select value="Berlin" loadingIcon="Loading..." loading />
      <Select
        value={10}
        loadingIcon={<Icon.DotsLoader fill="blue" width="32" height="32" />}
        loading
      />
    </>
  ),
};

export const ClearIcon: Story = {
  name: 'clearIcon',
  render: () => (
    <Select
      value="Paris"
      clearIcon={<Icon.CloseCircle width="16" height="16" fill="#b3b3b3" />}
      allowClear
    />
  ),
};

export const PrependIcon: Story = {
  name: 'prependIcon',
  args: { prependIcon: <Icon.Account fill="#b3b3b3" /> },
};

export const AppendIcon: Story = {
  name: 'appendIcon',
  args: { appendIcon: <Icon.Music fill="#b3b3b3" /> },
};

export const Filter: Story = {
  name: 'filter',
  render: () => (
    <Select
      options={options.musicStyles}
      filter={(option: string) => option.toLowerCase().includes('metal')}
    />
  ),
};

export const Sort: Story = {
  name: 'sort',
  render: () => (
    <>
      <p>Исходные опции (без сортировки).</p>
      <Pre>{options.users}</Pre>

      <p>Сортировка имени A - Z (по полю name).</p>
      <Select options={options.users} optionContent={renderUserOption} sort={sortByName} />

      <p>Сортировка по возрасту 1 - 100 (по полю age).</p>
      <Select options={options.users} optionContent={renderUserOption} sort={sortByAge} />
    </>
  ),
};

const RenderMenuStory = () => {
  const [variable, setVariable] = useState('foo');

  return (
    <Select
      value={variable}
      options={options.metaVariables}
      renderMenu={customRenderMenu}
      onSelect={setVariable}
    />
  );
};

export const RenderMenu: Story = {
  name: 'renderMenu',
  render: () => <RenderMenuStory />,
};

export const RenderOption: Story = {
  name: 'renderOption',
  render: () => (
    <Select
      value="foo"
      options={options.metaVariables}
      className="checkable-menu"
      renderOption={customRenderOption}
    />
  ),
};

const RenderEmptyOptionStory = () => {
  const [value, setValue] = useState<string>();
  const [items, setItems] = useState(options.metaVariables);
  const [search, setSearch] = useState('fizz');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filter = (option: string) => option.toLowerCase().includes(search.toLowerCase());

  const onAdd = () => {
    const trimmed = search.trim();

    if (trimmed.length && !items.includes(trimmed)) {
      setValue(search);
      setItems((currItems) => currItems.concat(search));

      setSearch('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') onAdd();
  };

  return (
    <>
      <p>Строка поиска.</p>
      <input value={search} placeholder="Search" onChange={handleInputChange} />

      <p>Результаты поиска.</p>
      <Select
        value={value}
        options={items}
        open
        filter={filter}
        renderEmptyOption={() => renderAddEmpty({ search, onAdd })}
      />

      <Select
        value={value}
        options={items}
        open
        filter={filter}
        renderEmptyOption={() => renderCreateEmpty({ search, onAdd })}
      />

      <Select
        value={value}
        options={items}
        open
        filter={filter}
        renderEmptyOption={() => renderNewEmpty({ search })}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export const RenderEmptyOption: Story = {
  name: 'renderEmptyOption',
  render: () => <RenderEmptyOptionStory />,
};

const OnOpenStory = () => {
  const [open, setOpen] = useState(false);

  const handleUncontrolledOpen = () => {
    log('Uncontrolled: onOpen called');
  };

  const handleControlledOpen = () => {
    setOpen(true);
    log('Controlled: onOpen called');
  };

  return (
    <>
      <p>Неконтролируемый Select</p>
      <Select options={options.cities} onOpen={handleUncontrolledOpen} />

      <p>Контролируемый Select</p>
      <Select open={open} options={options.cities} onOpen={handleControlledOpen} />
    </>
  );
};

export const OnOpen: Story = {
  name: 'onOpen',
  render: () => <OnOpenStory />,
};

const OnCloseStory = () => {
  const [open, setOpen] = useState(true);

  const handleUncontrolledClose = () => {
    log('Uncontrolled: onClose called');
  };

  const handleControlledClose = () => {
    setOpen(false);
    log('Controlled: onClose called');
  };

  return (
    <>
      <p>Неконтролируемый Select</p>
      <Select options={options.cities} defaultOpen onClose={handleUncontrolledClose} />

      <p>Контролируемый Select</p>
      <Select open={open} options={options.cities} onClose={handleControlledClose} />
    </>
  );
};

export const OnClose: Story = {
  name: 'onClose',
  render: () => <OnCloseStory />,
};

const OnOpenChangeStory = () => {
  const [open, setOpen] = useState(false);

  const handleUncontrolledOpenChange = (isOpen: boolean) => {
    log(`Uncontrolled: onOpenChange called ${isOpen}`);
  };

  const handleControlledOpenChange = (isOpen: boolean) => {
    log(`Controlled: onOpenChange called ${isOpen}`);
    setOpen(isOpen);
  };

  return (
    <>
      <p>Неконтролируемый Select</p>
      <Select options={options.cities} onOpenChange={handleUncontrolledOpenChange} />

      <p>Контролируемый Select</p>
      <Select open={open} options={options.cities} onOpenChange={handleControlledOpenChange} />
    </>
  );
};

export const OnOpenChange: Story = {
  name: 'onOpenChange',
  render: () => <OnOpenChangeStory />,
};

const OnSelectStory = () => {
  const [city, setCity] = useState(firstCity);

  return <Select value={city} options={options.cities} onSelect={setCity} />;
};

export const OnSelect: Story = {
  name: 'onSelect',
  render: () => <OnSelectStory />,
};

const OnDeselectStory = () => {
  const [city, setCity] = useState<string | null>(null);

  const handleDeselect = (value: string, option: string) => {
    log(`Deselected ${value}, ${option}`);
    setCity(null);
  };

  return (
    <Select
      value={city}
      options={options.cities}
      allowDeselect
      onSelect={setCity}
      onDeselect={handleDeselect}
    />
  );
};

export const OnDeselect: Story = {
  name: 'onDeselect',
  render: () => <OnDeselectStory />,
};

const OnClearStory = () => {
  const [city, setCity] = useState<string | null>(null);

  const handleClear = (value: string) => {
    log(`Cleared ${value}`);
    setCity(null);
  };

  return (
    <Select
      value={city}
      options={options.cities}
      allowClear
      onSelect={setCity}
      onClear={handleClear}
    />
  );
};

export const OnClear: Story = {
  name: 'onClear',
  render: () => <OnClearStory />,
};

const OnChangeStory = () => {
  const [city, setCity] = useState<string | null>(null);

  return (
    <Select value={city} options={options.cities} allowClear allowDeselect onChange={setCity} />
  );
};

export const OnChange: Story = {
  name: 'onChange',
  render: () => <OnChangeStory />,
};

export const OnFocus: Story = {
  name: 'onFocus',
  render: () => (
    <>
      <p>
        Начните навигацию по элементам с помощью клавиши <kbd>Tab</kbd>.
      </p>
      <Select value="Berlin" options={options.cities} onFocus={() => log('Select focused')} />

      <p>
        Select с <code>disabled</code>. Фокус не получит. Обработчик <code>onFocus</code>{' '}
        присутствует, но не вызывается.
      </p>
      <Select
        value="Berlin"
        options={options.cities}
        disabled
        onFocus={() => log('Select with disabled focused')}
      />

      <p>
        Select с <code>readOnly</code>. Получит фокус. Обработчик <code>onFocus</code> вызовется.
      </p>
      <Select
        value="Berlin"
        options={options.cities}
        readOnly
        onFocus={() => log('Select with readOnly focused')}
      />
    </>
  ),
};

export const OnBlur: Story = {
  name: 'onBlur',
  render: () => (
    <>
      <p>
        Начните навигацию по элементам с помощью клавиши <kbd>Tab</kbd>.
      </p>
      <button autoFocus>Start</button>

      <p>
        Select в состоянии <code>disabled</code>. Он не участвует в навигации (отсутствует
        визуальная подсветка фокуса; обработчик <code>onBlur</code> хоть и присутствует, но не
        вызывается). Фокус получит следующий элемент .
      </p>
      <Select value="Berlin" options={options.cities} disabled onBlur={() => log('Ignored')} />

      <p>
        Select в состоянии <code>open</code>. При покидании элемента список опций скрывается.
      </p>
      <Select value="London" options={options.cities} onBlur={() => log('Called')} />

      <p>
        Начните обратную навигацию с помощью комбинации клавиш <kbd>Shift + Tab</kbd>.
      </p>
      <button>Finish</button>
    </>
  ),
};
