import './Pagination.css';

const Pagination = ({
  currentPage,
  nextPage,
  prevPage,
  goToPage,
  totalPages,
}) => {
  return (
    <div className='pagination'>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
