/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/molecules/Layout';
import Heading from '../../components/atoms/Heading';
import Pagination from '../../components/molecules/Pagination';
import Loading from '../loading';
import { CharacterFull } from '../../types/Character';
import { Container } from '../../App.styles';
import usePaginate from '../../hooks/usePaginate';
import { useRickMortyStore } from '../../store';
import { ContainerHome, Content } from './Home.styles';
import Grid from '../../components/molecules/Grid';
import Card from '../../components/molecules/Card';

function Home() {
  const currentPage = useRickMortyStore((state) => state.currentPage);
  const characters = useRickMortyStore((state) => state.characters);
  const addCharacters = useRickMortyStore((state) => state.addCharacters);
  const changeCurrentPage = useRickMortyStore(
    (state) => state.changeCurrentPage
  );
  const changeDetailId = useRickMortyStore((state) => state.changeDetailId);
  const addSelected = useRickMortyStore((state) => state.addSelected);
  const { loading, error, data } = usePaginate();
  const navigate = useNavigate();

  const onPageChange = (newValue: number) => changeCurrentPage(newValue);

  if (loading) {
    return (
      <Layout>
        <Container>
          <Loading />
        </Container>
      </Layout>
    );
  }
  if (error) return <div>error</div>;
  addCharacters(data?.characters?.results);

  // const newChar: Omit<CharacterFull, 'episode'> & {
  //   episode?: [object];
  // } = {
  //   ...data.characters.results[0],
  // };
  // delete newChar.episode;

  const handleChangeDetailId = (id: string) => {
    changeDetailId(id);
    addSelected();
    navigate('/details');
  };

  return (
    <ContainerHome>
      <Heading title="Rick and Morty Gallery" />
      <Content>
        <Grid>
          {characters?.map((character: CharacterFull) => (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              onClickHandler={() => handleChangeDetailId(character.id)}
            />
          ))}
        </Grid>
        <Pagination
          onPageChange={onPageChange}
          currentPage={currentPage}
          numberPages={data?.characters?.info?.pages}
        />
      </Content>
    </ContainerHome>
  );
}

export default Home;
