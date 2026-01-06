import React, { useState } from 'react';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="lite-layout">
      <div className={`lite-layout__sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
        <SideBar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="lite-layout__main">
        <div className="lite-layout__header">
          <Header onMenuClick={toggleSidebar} />
        </div>
        <main className="lite-layout__content">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 45
          }}
          onClick={() => setIsSidebarOpen(false)}
          className="d-md-none" // Bootstrap utility? No, custom logic needed mostly
        />
      )}
    </div>
  );
};

export default Layout;
