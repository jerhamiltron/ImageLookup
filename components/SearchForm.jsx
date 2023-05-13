import { useState } from 'react';
import { useGlobalContext } from '../src/context';

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchItem(searchValue);
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='form-input search-input'
          type='text'
          name='search'
          placeholder='cat'
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
