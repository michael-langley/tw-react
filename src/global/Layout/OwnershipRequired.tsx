import React from 'react';
import EmptyState from './EmptyState';
import { AuthenticationDrawing } from '../../illustrations';

const OwnershipRequired = () => {
  return (
      <EmptyState text="Ownership Required" subText="You must be an owner to view this page" icon={<AuthenticationDrawing />} />
  );
};

export default OwnershipRequired;
