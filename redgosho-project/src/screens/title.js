import React from 'react';
import styled from 'styled-components'
import Tapioca from './Tapioca';

const Body = styled.div`
  height: 100vh;
  width: 100vw
  background: #ffedab;
  padding: 50% 50%;
`

function Title() {
  return (
    <Body>
      <Tapioca />
    </Body>
  );
}

export default Title;
