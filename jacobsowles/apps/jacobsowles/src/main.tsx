import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { App } from './components/App';
import { Auth0ProviderWithHistory } from './auth';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
