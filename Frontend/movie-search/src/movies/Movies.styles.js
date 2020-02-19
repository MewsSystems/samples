import styled from 'styled-components';

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
`;

const CardInfoWrapper = styled.div`
  margin: 20px auto 40px;
`;

const SearchWrapper = styled.div`
  margin-bottom: 25px;
  margin-top: 70px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: white;
  //position: fixed;
  width: 100%;
`;


export { MoviesContainer, MoviesListWrapper, CardInfoWrapper, SpinnerWrapper,SearchWrapper };
