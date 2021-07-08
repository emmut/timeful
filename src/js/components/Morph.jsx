import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SvgBase } from '../lib/svg';
import { useSpring, animated, useSpringRef } from 'react-spring';

const Svg = styled(SvgBase)`
  height: auto;
  width: ${({ large }) => (large ? '800px' : '600px')};
`;

export function Morph({ paths, color, large, delay, isStarted }) {
  const springRef = useSpringRef();

  const { x } = useSpring({
    ref: springRef,
    loop: { reverse: true },
    config: { duration: 5000 },
    from: {
      x: 0
    },
    to: {
      x: 1
    }
  });

  const { o } = useSpring({
    ref: springRef,
    loop: { reverse: true },
    config: { duration: 400000 },
    from: {
      o: 0
    },
    to: {
      o: 180
    },
    delay
  });

  function start() {
    springRef.current?.forEach((ref) => ref.start());
  }

  function stop() {
    springRef.current?.forEach((ref) => ref.stop());
  }

  useEffect(() => {
    isStarted ? start() : stop();
  }, [isStarted]);

  return (
    <animated.div
      style={{
        color,
        transform: o.to((o) => `rotate(${o}deg)`)
      }}
    >
      <Svg
        viewBox="0 0 600 600"
        style={{
          color
        }}
        large={large}
      >
        <animated.path
          d={x.to({
            range: [0, 1],
            output: paths
          })}
          fill="currentColor"
        />
      </Svg>
    </animated.div>
  );
}
