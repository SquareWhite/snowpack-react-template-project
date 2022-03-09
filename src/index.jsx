import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import '@/assets/globals.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
