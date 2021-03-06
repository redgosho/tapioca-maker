import React from 'react';
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 画像読み込み
import logo from '../../img/logo.png';
// コンポ読み込みs
import Tapioca from '../Tapioca';
import TabMenu from './TabMenu';

class  Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StrowColor: '#ea5550',
      DrinkColor: '#c49a6a',
      TapiocaColor: '#000000'
    }
  }
  render() {
    return (
      <Body>
        <MainArea>
          <TapiocaArea>
            <LogoImage src={logo} />
            <TapiokaBoard>
              <Tapioca StrowColor={this.state.StrowColor} DrinkColor={this.state.DrinkColor} TapiocaColor={this.state.TapiocaColor}/>
            </TapiokaBoard>
          </TapiocaArea>
        </MainArea>
        <CustomArea>
          <CustomBorad>
            <TabMenu StrowColor={this.state.StrowColor} DrinkColor={this.state.DrinkColor} TapiocaColor={this.state.TapiocaColor}/>
          </CustomBorad>
        </CustomArea>
      </Body>
    );
  }
}

const Body = styled.div`
  height: 100vh;
  width: 100vw
  display: flex;
  flex-direction: row;
  background:
  linear-gradient(
    90deg,
    rgba(208, 147, 82, 0.6),
    rgba(192, 134, 70, 0.6) 60%,
    rgba(208, 147, 82, 0.6)
  ),
  repeating-radial-gradient(
    ellipse at 60% 500%,
    #c08646,
    #c08646 0.2%,
    #d09352 0.6%,
    #d09352 1%
  );
`
const MainArea = styled.div`
  display: block;
  height: 100%;
  width: 50%;
  position: relative;
  flex-direction: column;
`
const TapiocaArea = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background: #CCFFFF;
  margin: auto;
`
const LogoImage = styled.img`
  width: 300px;
  // 縦中央寄せ
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateY(-70%) translateX(-50%);
  -webkit- transform: translateY(-70%) translateX(-50%);
`
const TapiokaBoard = styled.div`
  // 縦横中央寄せ
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
`
const CustomArea = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
  background: linear-gradient(#ccc, #fff);
`
const CustomBorad = styled.div`
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: absolute;
  width: 98%;
  height: 98%;
  // 縦横中央寄せ
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
`
export default Title;
