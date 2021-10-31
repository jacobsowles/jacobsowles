import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Auth0ProviderWithHistory } from './auth';
import { App } from './components/App';

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
