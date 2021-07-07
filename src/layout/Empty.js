import React, { memo } from 'react';

function EmptyLayout({ children }) {
  return (
    <>
    { children }
    </>
  );
}

export default memo(EmptyLayout);
