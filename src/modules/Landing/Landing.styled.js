import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  & > svg {
    animation: rotate 5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
