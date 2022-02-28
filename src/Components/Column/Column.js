import PropTypes from 'prop-types';

export default function Column({ children, size, extraClass, ...props }) {
  return (
      <section className={[`col-${size}`, extraClass].join(' ')}>
        {children}
      </section>
  );
}


Column.propTypes = {
    size: PropTypes.number.isRequired
};
  
Column.defaultProps = {
  size: 6
};