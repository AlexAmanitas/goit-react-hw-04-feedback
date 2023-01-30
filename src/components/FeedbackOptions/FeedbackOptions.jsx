import PropTypes from 'prop-types';
import { FeedbackBtn, FeedbackButtons } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLiveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <FeedbackBtn
          key={option}
          name={option}
          type="button"
          onClick={onLiveFeedback}
        >
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.string.isRequired,
    onLiveFeedback: PropTypes.func.isRequired,
  }),
};

export default FeedbackOptions;
