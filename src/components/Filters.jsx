import Filter from './Filter';
const Filters = () => {
  const filters = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Active' },
    { id: 3, name: 'Completed' },
  ];
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
