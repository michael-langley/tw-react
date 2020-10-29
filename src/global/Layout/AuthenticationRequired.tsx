import React from 'react';
import EmptyState from './EmptyState';
import { AuthenticationDrawing } from '../../illustrations';

const AuthenticationRequired = () => {
  return (
      <EmptyState text="Authorization Required" subText="You are not authorized to view this page" icon={<AuthenticationDrawing />} />
  );
};

export default AuthenticationRequired;
