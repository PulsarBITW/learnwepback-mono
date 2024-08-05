import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {router} from './reactRouter/router';

const rootHtml = document.getElementById('root');
if (!rootHtml) {
    console.log('root is missing in DOM');
} else {
    const reactRoot = ReactDOM.createRoot(rootHtml);
    reactRoot.render(<RouterProvider router={router} />);
}
