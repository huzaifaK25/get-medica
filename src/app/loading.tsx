import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/Cliploader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  marginTop: '200px',
};
const loading = true;

const Spinner = () => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      aria-label="Loading Spinner"
      color="#4338ca"
      size={300}
      speedMultiplier={1.1}
    />
  );
};

export default Spinner;
