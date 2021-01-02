import React, { memo } from 'react';

const DefaultLayout = ({ children }) => (
  <>{children}</>
);

export default memo(DefaultLayout);
