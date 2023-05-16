import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/molecules/Layout';
import Loading from './pages/loading';
import { NotFoundText, Container } from './App.styles';
import ErrorBoundary from './components/organisms/ErrorBoundary';

const Home = lazy(() => import('./pages/home'));

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <Container>
                  <Loading />
                  <NotFoundText>
                    Page Not Found! Click on the title
                  </NotFoundText>
                </Container>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </Suspense>
  );
}
