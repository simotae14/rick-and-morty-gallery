import { ApolloProvider } from '@apollo/client';
import ErrorBoundary from './components/organisms/ErrorBoundary';
import { client } from './graphql/client';

interface ApolloWrapperProps {
  children: React.ReactNode;
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ErrorBoundary>
  );
}
