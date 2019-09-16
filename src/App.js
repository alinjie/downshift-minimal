import React from 'react';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import './App.css';

const App = () => {
  const items = [
    {
      name: 'Henry'
    },
    {
      name: 'Max'
    },
    {
      name: 'David'
    },
    {
      name: 'Mary'
    },
    {
      name: 'John'
    }
  ];

  const filterItems = inputValue =>
    inputValue ? matchSorter(items, inputValue, { keys: ['name'] }) : items;

  const getObjectString = item => (item ? item.name : '');
  return (
    <div className='App'>
      <Downshift itemToString={getObjectString}>
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          inputValue
        }) => (
          <div className='ds'>
            <label {...getLabelProps()}>Select A Person</label>
            <input {...getInputProps()} type='text' />
            <ul {...getMenuProps()}>
              {isOpen
                ? filterItems(inputValue).map((item, index) => (
                    <li
                      {...getItemProps({ item, key: item.name })}
                      className={highlightedIndex === index && 'active'}
                    >
                      {item.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default App;
