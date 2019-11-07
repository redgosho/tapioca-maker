import React from 'react';
import styled from 'styled-components'
import Tapioca from './Tapioca';

function Title() {
  return (
    <Body>
      <Tapioca />
      <InfoButton>
        <InfoButton__i>i</InfoButton__i>
      </InfoButton>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  width: 100vw
`
const InfoButton = styled.button`
  display: inline-block;
  text-decoration: none;
  color: rgba(152, 152, 152, 0.43);/*アイコン色*/
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 40px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
  &:active {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
    border-bottom: none;
  }
`
const InfoButton__i = styled.i`
  line-height: 80px;
`

export default Title;
