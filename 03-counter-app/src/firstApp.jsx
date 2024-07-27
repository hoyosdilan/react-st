import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
export default function FirstApp({ title }) {
  return (
    <>
      <div>{ title }</div>
      {/**comment */}
      <h2>{ Math.random() * 100 }</h2>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
