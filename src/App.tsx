import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/molecules/Layout';
import Loading from './pages/loading';
import { NotFoundText, Container } from './App.styles';
import ErrorBoundary from './components/organisms/ErrorBoundary';

export function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <Container>
                <Loading />
                <NotFoundText>Page Not Found! Click on the title</NotFoundText>
              </Container>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
}
