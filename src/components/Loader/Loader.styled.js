import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: clamp(150px, 50vw, 400px);
    height: 200px;

    circle {
      animation: rotate 10s infinite linear;

      &:nth-child(2n + 1) {
        animation: rotate 10s infinite linear reverse;
      }
    }
  }
`;
