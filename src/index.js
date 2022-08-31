import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/CopyHW05/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
