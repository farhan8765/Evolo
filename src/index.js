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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Defer web-vitals to avoid blocking main thread during initial paint
if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(() => reportWebVitals());
} else {
  setTimeout(reportWebVitals, 1);
}
