import React from 'react';

// components
import { TheTime } from '../components/TheTime';
import { DisplaySettings } from '../components/DisplaySettings';
import { Morph } from '../components/Morph';
// font awesome
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { paths } from '../lib/defaults';
import { Timer } from '../components/styled/Timer';
import { Wrapper } from '../components/styled/WrapperHome';
import { PlayBtn } from '../components/styled/PlayButton';
import { StyledDisplaySettings } from '../components/styled/DisplaySettings';
import { StyledButton } from '../components/styled/Button';
import { StyledButtons } from '../components/styled/StyledButtons';
import { StyledMorph } from '../components/styled/Morph';

export function Home({
  settings,
  time,
  isStarted,
  toggleTimer,
  nextLap,
  resetLap,
  isWorkTimer
}) {
  return (
    <Timer>
      <Wrapper>
        <StyledMorph>
          <Morph
            paths={paths.primary}
            color={
              isWorkTimer
                ? settings.colors.primary.light
                : settings.colors.secondary.light
            }
            delay={200}
            large
            isStarted={isStarted}
          />
        </StyledMorph>
        <StyledMorph>
          <Morph
            paths={paths.secondary}
            color={
              isWorkTimer
                ? settings.colors.primary.dark
                : settings.colors.secondary.dark
            }
            isStarted={isStarted}
          />
        </StyledMorph>
        <StyledDisplaySettings>
          <DisplaySettings settings={settings} className="settings" />
        </StyledDisplaySettings>
        <PlayBtn onClick={() => toggleTimer()}>
          <Icon
            icon={['fas', isStarted ? 'pause' : 'play']}
            style={{ transform: isStarted ? '' : 'translateX(10px)' }}
          />
        </PlayBtn>
        <TheTime time={time} />
        <StyledButtons>
          <StyledButton onClick={() => nextLap()}>
            <Icon icon={['fas', 'forward']} />
          </StyledButton>
          <StyledButton onClick={() => resetLap()}>
            <Icon icon={['fas', 'undo']} />
          </StyledButton>
        </StyledButtons>
      </Wrapper>
    </Timer>
  );
}
