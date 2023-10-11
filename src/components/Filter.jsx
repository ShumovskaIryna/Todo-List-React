const Filter = (props) => {
  return (
    <>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="ex2-tab-1"
          data-bs-toggle="tab"
          href="#ex2-tabs-1"
          role="tab"
          aria-controls="ex2-tabs-1"
          aria-selected="true"
          style={{ color: '#6da2fd' }}
        >
          {props.filterItem.name}
        </a>
      </li>
    </>
  );
};

export default Filter;
