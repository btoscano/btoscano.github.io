import PropTypes from 'prop-types';

export default function Column({ children, size, margins, extraClass, ...props }) {
  return (
      <section className={[`col-${size}`, `col-${size}`+ (margins? '--margins' : '') , extraClass].join(' ')}>
        {children}
      </section>
  );
}


Column.propTypes = {
    size: PropTypes.number.isRequired,
    margins: PropTypes.bool
};
  
Column.defaultProps = {
  size: 6
};