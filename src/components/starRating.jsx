import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/rating.css";

function Rating(props) {

  const handleChange = props.onChange;
  return (
    <div className="star-rating">
      <div className="star-input value={5}">
        <input value={5} type="radio" name="rating" id="rating-5" onChange={(e) => handleChange(e.target.value)} />
        <label htmlFor="rating-5" className="fas fa-star">
          <FontAwesomeIcon icon={faStar} size="xs" />
        </label>
        <input value={4} type="radio" name="rating" id="rating-4" onChange={(e) => handleChange(e.target.value)} />

        <label htmlFor="rating-4" className="fas fa-star">
          <FontAwesomeIcon icon={faStar} size="xs" />
        </label>
        <input value={3} type="radio" name="rating" id="rating-3" onChange={(e) => handleChange(e.target.value)} />
        <label htmlFor="rating-3" className="fas fa-star">
          <FontAwesomeIcon icon={faStar} size="xs" />
        </label>
        <input value={2} type="radio" name="rating" id="rating-2" onChange={(e) => handleChange(e.target.value)} />

        <label htmlFor="rating-2" className="fas fa-star">
          <FontAwesomeIcon icon={faStar} size="xs" />
        </label>
        <input value={1} type="radio" name="rating" id="rating-1" onChange={(e) => handleChange(e.target.value)} />
        <label htmlFor="rating-1" className="fas fa-star">
          <FontAwesomeIcon icon={faStar} size="xs" />
        </label>

      </div>
    </div>
  );
}


export default Rating;