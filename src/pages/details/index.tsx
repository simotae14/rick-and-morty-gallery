/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../App.styles';
import Heading from '../../components/atoms/Heading';
import Card from '../../components/molecules/Card';
import Grid from '../../components/molecules/Grid';
import Layout from '../../components/molecules/Layout';
import Pagination from '../../components/molecules/Pagination';
import usePaginate from '../../hooks/usePaginate';
import { useRickMortyStore } from '../../store';
import { CharacterFull } from '../../types/Character';
import Loading from '../loading';
import { DetailsContainer, GridContainer } from './Details.styles';

function Details() {
  const changeCurrentPage = useRickMortyStore(
    (state) => state.changeCurrentPage
  );
  const currentPage = useRickMortyStore((state) => state.currentPage);
  const characters = useRickMortyStore((state) => state.characters);
  const addCharacters = useRickMortyStore((state) => state.addCharacters);
  const detailId = useRickMortyStore((state) => state.detailId);
  const changeDetailId = useRickMortyStore((state) => state.changeDetailId);
  const navigate = useNavigate();
  useEffect(() => {
    // check if detailId is in the characters array
    const found = characters?.find((character) => character.id === detailId);
    if (!found) {
      navigate('/');
    }
  }, [detailId, characters, navigate]);
  const { loading, error, data } = usePaginate();
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
  const onPageChange = (newValue: number) => changeCurrentPage(newValue);
  const handleChangeDetailId = (id: string) => {
    changeDetailId(id);
  };
  return (
    <DetailsContainer>
      <Heading title="Rick and Morty Gallery" />
      <GridContainer>
        <Grid>
          {characters?.map((character: CharacterFull) => (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              isSelected={character.id === detailId}
              onClickHandler={() => handleChangeDetailId(character.id)}
            />
          ))}
        </Grid>
        <Pagination
          onPageChange={onPageChange}
          currentPage={currentPage}
          numberPages={data?.characters?.info?.pages}
        />
      </GridContainer>
    </DetailsContainer>
  );
}

export default Details;
