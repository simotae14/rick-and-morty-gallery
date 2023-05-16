/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';
import { Container, ErrorText } from './ErrorBoundary.styles';
import Loading from '../../../pages/loading';
import Layout from '../../molecules/Layout';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(error: Error): State {
    console.error(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <Container>
            <Loading />
            <ErrorText data-testid="errorboundary">
              Sorry this page is broken
            </ErrorText>
          </Container>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
