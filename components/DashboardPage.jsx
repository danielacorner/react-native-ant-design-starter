import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, Button } from 'react-native';

const CustomControl = ({ onPress, title }) => (
  <Button {...{ title, onPress }} />
);

const CONTROLS = {
  BUTTON: 'button',
};

const CardStyles = styled(View)``;

const Card = ({ type = CONTROLS.BUTTON, onPress, text }) => (
  <CardStyles>
    <Image />
    <Text>{text}</Text>
    <CustomControl {...{ type, onPress, title: 'howdydo' }} />
  </CardStyles>
);
// text + icon + [control];

const DashStyles = styled(View)`
  display: grid;
  width: 100%;
  /* place-items: center center; */
  /* text-align: center; */
`;

// ? once we have the API data, create a type map for custom controls

// noooo my miiiic
// last comments OK
// we wanna pass in an array of data
export const DashboardPage = ({ dataArray }) => {
  console.log('TCL: DashboardPage -> dataArray', dataArray);
  return (
    <DashStyles>
      {dataArray.map(({ id, text }) => {
        console.log('TCL: DashboardPage -> text', text);
        const onPress = () => console.log('HEY');
        const type = CONTROLS.BUTTON;

        return (
          // make a function to call on control ... onChange, onPress
          <Card key={id} {...{ type, onPress, text }} />
        );
      })}
    </DashStyles>
  );
};
