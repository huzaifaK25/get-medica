import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/Cliploader';

const override: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
    />
  );
};

export default Spinner;
