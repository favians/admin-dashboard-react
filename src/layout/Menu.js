import React, { memo } from 'react';

function MenuLayout({ children }) {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
      sampah="sampah"
    >
      <h2>we are using Menu Layout Brohhh</h2>
      {children}
    </div>
  );
}

export default memo(MenuLayout);
