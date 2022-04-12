import React from 'react';
import ReactDOM from 'react-dom';

import '@/assets/globals.scss';
import App from '@/components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
