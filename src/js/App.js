import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalSettings } from './lib/GlobalSettings';

// routes
import { Home } from './routes/Home';
import { Settings } from './routes/Settings';

// navigation
import { Nav } from './components/Nav';

// fontawesome
import './plugins/fontawesome';

// helpers
import { isObjEmpty, localSetting } from './lib/helpers';

// local storeage acces key
import { defaultSettings } from './lib/defaults';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 4rem;
  box-sizing: border-box;
`;

export function App() {
  const [settings, setSettings] = useState(undefined);
  const [time, setTime] = useState(undefined);

  useEffect(async () => {
    const settings = await localSetting.get();
    if (isObjEmpty(settings)) {
      localSetting.set(defaultSettings);
    }
    setSettings(settings);
  }, []);

  return (
    <GlobalSettings.Provider value={settings}>
      <Router>
        <Wrapper>
          <Route exact path="/">
            <Home settings={settings} time={time} setTime={setTime} />
          </Route>
          <Route path="/settings">
            <Settings
              settings={settings}
              setTime={setTime}
              setSettings={setSettings}
            />
          </Route>
        </Wrapper>
        <Nav />
      </Router>
    </GlobalSettings.Provider>
  );
}
