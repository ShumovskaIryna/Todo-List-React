import React from 'react';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const Filters = () => {
  const filters = useSelector((state) => state.filter.filters);
  return (
    <div>
      <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
        {filters.map((el) => (
          <Filter key={el.id} filterItem={el} />
        ))}
      </ul>
    </div>
  );
};

export default Filters;
