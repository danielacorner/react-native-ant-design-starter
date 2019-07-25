import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import ActivityIndicator from '@ant-design/react-native/lib/activity-indicator';
import { DashboardPage } from './DashboardPage';

const SplashStyles = styled(View)`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SplashPage = ({}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch data, set data, set loading
  // cWM -- for layout effect (to prevent the flickers)
  // if you're changing the layout / styles
  // useLayoutEffect

  // cDU, cDM, cWU
  useEffect(() => {
    const myFakeData = { id: 1, text: 'yo' };
    setData(myFakeData);
    setLoading(false);

    return () => {
      // cleanup / teardown / unmount
    };
  }, []); // empty array means no dependencies = only runs once (on mount)
  // no dependencies array = cDU (runs every time)

  return (
    <SplashStyles data-styled="SplashStyles">
      {loading ? (
        <ActivityIndicator />
      ) : (
        // DONE!?
        <DashboardPage {...{ dataArray: [data] }} />
      )}
    </SplashStyles>
  );
};

export default SplashPage;
