import PropTypes from 'prop-types';

export default function Grid({ columns, extraClass, ...props }) {
  return (
  <div className={['row', extraClass].join(' ')}>
      {columns.map((n, index) => (
      <div key={index} className={`col-${n}`}>
        {n}
      </div>
    ))}
  </div>
  );
}


Grid.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.number).isRequired
  };
  
Grid.defaultProps = {
   columns: [5, 7]
};