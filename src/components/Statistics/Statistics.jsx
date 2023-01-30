import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }),
};
