import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Dashsidebar.css";

const menuConfig = [
  {
    id: 'users',
    label: '👤 User Management',
    links: [
      { to: '/AddUser', label: '➕ Add User' },
      { to: '/ViewUser', label: '📋 View Users' },
    ],
  },
  {
    id: 'category',
    label: '🗂 Category',
    links: [
      { to: '/Addcategory', label: '➕ Add Category' },
      { to: '/Viewcategory', label: '📋 View Category' },
    ],
  },
  {
    id: 'products',
    label: '📦 Products',
    links: [
      { to: '/AddProduct', label: '➕ Add Product' },
      { to: '/viewproducts', label: '📋 View Products' },
    ],
  },
];

const Dashsidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="brand">📦 InventoryPro</h2>
        <nav>
          <NavLink to="" end>
            🏠 Dashboard
          </NavLink>

          {menuConfig.map(({ id, label, links }) => (
            <div key={id}>
              <div
                className={`menu-item ${openMenu === id ? 'active' : ''}`}
                onClick={() => toggleMenu(id)}
              >
                {label} ▾
              </div>
              {openMenu === id && (
                <div className="submenu">
                  {links.map((link) => (
                    <NavLink key={link.to} to={link.to}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink to="reports">📊 Reports</NavLink>
          <NavLink to="settings">⚙️ Settings</NavLink>
          <NavLink to="/">🚪 Logout</NavLink>
        </nav>
      </aside>
      <main className="main-content">{/* Content goes here */}</main>
    </div>
  );
};

export default Dashsidebar;
``