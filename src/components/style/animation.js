import { keyframes, css } from 'styled-components';

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const pulseAnimation = keyframes`
0% {
  transform: scale(1.3);
}

70% {
  transform: scale(1);
}

100% {
  transform: scale(1.3);
}
`;

const heartBeatAnimation = keyframes`
 0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }`;

const rollInAnimation = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }`;

export const ROLLIN = css`
  animation: ${rollInAnimation} 1.5s;
`;

export const ROTATE = css`
  animation: ${rotateAnimation} 2s linear infinite;
`;

export const PULSE = css`
  animation: ${pulseAnimation} 2s linear infinite;
`;

export const HEARTBEAT = css`
  animation: ${heartBeatAnimation} 1.5s;
`;
