import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const LandingPageTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`

export const TreeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 60px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AlertTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;