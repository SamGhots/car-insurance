import React from 'react';
import './StickyFooter.css';

function StickyFooter({ children }) {
  return (
    <div className='sticky-footer'>
      {children} {/* วางเนื้อหาที่นี่ */}
    </div>
  );
}

export default StickyFooter;
