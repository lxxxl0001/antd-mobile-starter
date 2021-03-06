import React, {PropTypes} from 'react';
import {Router, Route} from 'dva/router';

import Index from './routes/Index.js';
import Page01 from './routes/Page01.js';
import Page02 from './routes/Page02.js';
import Page03 from './routes/Page03.js';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/page01" component={Page01} />
      <Route path="/page02" component={Page02} />
      <Route path="/page03" component={Page03} />
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
