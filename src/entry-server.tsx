import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { ApolloWrapper } from './ApolloWrapper';

interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <ApolloWrapper>
      <React.StrictMode>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </React.StrictMode>
    </ApolloWrapper>
  );
  return { html };
}
