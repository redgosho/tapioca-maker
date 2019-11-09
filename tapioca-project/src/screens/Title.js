import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tapioca from './Tapioca';

function Title() {
  return (
    <Body>
      <Main__area>
        <Tapioca__area>
          <Tapioca />
        </Tapioca__area>
        <Enter>いちぐち</Enter>
        <IconButton__area>
          <InfoButton>
            <FontAwesomeIcon icon={['fas', 'info']} />
          </InfoButton>
        </IconButton__area>
      </Main__area>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  width: 100vw
`
const Main__area = styled.div`
  display: block;
  height: 100%;
  background: rgba(255,0,0,0.5);
  border: 1px solid #aaa;
  position: relative;
`
const Tapioca__area = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0px;
  height: 0px;
`

const Enter = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: dashed 1px #67c5ff;
  background: #f2fcff;
  border-radius: 3px;
  transition: .4s;
  outline:none;
  &:hover {
    background: #cbedff;
    color: #FFF;
  }
`
const IconButton__area = styled.div`
  text-align: center;
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
  outline:none;
  &:active {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
    border-bottom: none;
  }
  i {
    line-height: 80px;
  }
`

export default Title;
