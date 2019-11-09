import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 画像読み込み
import logo from '../img/logo.png';
// コンポ読み込みs
import Tapioca from './Tapioca';

function Title() {
  return (
    <Body>
      <Main__area>
        <LogoImage src={logo} />
        <Tapioca__area>
          <Tapioca />
        </Tapioca__area>
        <Enter__area>
          <Enter>いりぐち</Enter>
        </Enter__area>
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
const LogoImage = styled.img`
  width: 300px;
  // 縦中央寄せ
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateY(-70%) translateX(-50%);
  -webkit- transform: translateY(-70%) translateX(-50%);
`
const Main__area = styled.div`
  display: block;
  height: 100%;
  background: rgba(255,0,0,0.3);
  border: 1px solid #aaa;
  position: relative;
  flex-direction: column;
`
const Tapioca__area = styled.div`
  // 縦中央寄せ
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateY(-70%) translateX(-50%);
  -webkit- transform: translateY(-70%) translateX(-50%);
`
const Enter__area = styled.div`
  // 横中央寄せ
  text-align: center;
  // 縦中央寄せ
  position: absolute;
  top:75%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
`
const Enter = styled.button`
  display: inline-block;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  padding: 0.1em 1em;
  text-decoration: none;
  color: #1e90ff;
  border: dashed 3px #1e90ff;
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
  // 横中央寄せ
  text-align: center;
  // 縦中央寄せ
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
`
const InfoButton = styled.button`
  display: inline-block;
  text-decoration: none;
  color: rgba(152, 152, 152, 0.43);/*アイコン色*/
  width: 40px;
  height: 40px;
  line-height: 0px;
  font-size: 20px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
  outline:none;
  &:active {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
    border-bottom: none;
  }
`

export default Title;
