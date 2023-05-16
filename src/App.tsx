import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/molecules/Layout';
import Loading from './pages/loading';
import { NotFoundText, Container } from './App.styles';

export function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
