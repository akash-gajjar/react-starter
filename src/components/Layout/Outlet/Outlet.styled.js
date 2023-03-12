import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  display: flex;

  &,
  & > div {
    min-height: calc(100vh);
  }
`;
