import React from 'react';

const NAV_ITEMS = [
  { label: 'Home', active: true },
  { label: 'Student' },
  { label: 'Employers' },
  { label: 'Institutions' },
  { label: 'About us', hasDropdown: true },
  { label: 'Events', hasDropdown: true },
];

const baseFontStack =
  "'Inter', 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const styles = {
  navShell: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '24px 0',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  },
  nav: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 28px',
    backgroundColor: '#f5f5f7',
    borderRadius: 999,
    boxShadow:
      '0px 18px 32px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.05)',
    fontFamily: baseFontStack,
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#5533ff',
  },
  logoChip: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    backgroundColor: '#ece9ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 22,
    height: 22,
  },
  menu: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    margin: '0 40px',
  },
  menuItem: (active) => ({
    fontSize: 15,
    fontWeight: active ? 600 : 500,
    color: active ? '#6b3dff' : '#6f7177',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
  }),
  caret: {
    width: 10,
    height: 10,
    fill: '#6f7177',
  },
  cta: {
    padding: '10px 22px',
    borderRadius: 999,
    border: 'none',
    backgroundColor: '#6b3dff',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: baseFontStack,
    boxShadow: '0px 6px 12px rgba(107, 61, 255, 0.32)',
  },
};

const CaretDown = () => (
  <svg
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.caret}
  >
    <path
      d="M1 1.5L6 6l5-4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoMark = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={styles.logoIcon}
  >
    <path
      d="M12 3.5l7.8 13.5H4.2L12 3.5z"
      fill="none"
      stroke="#6b3dff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 11l3.9 6.8H8.1L12 11z"
      fill="#6b3dff"
      opacity="0.9"
    />
  </svg>
);

const Navbar = () => {
  return (
    <div style={styles.navShell}>
      <nav style={styles.nav}>
        <div style={styles.logoGroup}>
          <div style={styles.logoChip}>
            <LogoMark />
          </div>
          <span style={styles.logoText}>Evolo AI</span>
        </div>

        <div style={styles.menu}>
          {NAV_ITEMS.map(({ label, active, hasDropdown }) => (
            <div key={label} style={styles.menuItem(active)}>
              {label}
              {hasDropdown && <CaretDown />}
            </div>
          ))}
        </div>

        <button type="button" style={styles.cta}>
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
