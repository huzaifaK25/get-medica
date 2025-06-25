import React from 'react';

interface Props {
  loginFor: 'doctor' | 'patient';
}

const LoginView: React.FC<Props> = ({ loginFor }) => {
  if (loginFor === 'doctor') {
    // doctor login api
  } else {
    // patient login api
  }

  // after successful login redirect to loginFor(Doctor dashboard or Patient dashboard)

  return (
    <main className=" flex flex-row min-h-dvh min-w-dvw">
      <div className=" flex border-2 border-blue-700 w-"> image box</div>
      <div className=" flex border-2 border-green-400"> form box</div>
    </main>
  );
};

export default LoginView;
