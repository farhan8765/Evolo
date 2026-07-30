import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ignore noisy ResizeObserver errors coming from third‑party scripts (e.g. HubSpot)
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      event.message === 'ResizeObserver loop completed with undelivered notifications.' ||
      event.message === 'ResizeObserver loop limit exceeded'
    ) {
      event.stopImmediatePropagation();
    }
  });
}

const rootElement = document.getElementById('root');
const staticShell = rootElement?.querySelector('[data-static-shell]');

if (staticShell) {
  rootElement.style.minHeight = `${Math.ceil(staticShell.getBoundingClientRect().height)}px`;
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (staticShell) {
  requestAnimationFrame(() => {
    rootElement.style.minHeight = '';
  });
}

// Defer web-vitals to avoid blocking main thread during initial paint
if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(() => reportWebVitals());
} else {
  setTimeout(reportWebVitals, 1);
}
