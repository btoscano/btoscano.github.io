
function Testimonials({ source }) {
    return (
      <>
        {source ? (
          <ul className="testimonial__list">
            {[...source].reverse().map((listitem) => (
              <li className="testimonial__item" key={listitem.index}>
                  <p>{listitem.description} </p>
                  <p className="testimonial__person" >- {listitem.person} </p>
              </li>
            ))}
          </ul>
        ) : null}
      </>
    );
  }

  export default Testimonials;