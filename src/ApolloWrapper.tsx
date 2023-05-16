import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import ErrorBoundary from './components/organisms/ErrorBoundary';

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
