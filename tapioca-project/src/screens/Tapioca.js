import React from 'react';
import styled, { keyframes } from 'styled-components'

class Tapioca extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   StrowColor: this.props.StrowColor,
    //   DrinkColor: this.props.DrinkColor,
    //   TapiocaColor: this.props.TapiocaColor
    // }
  }
  render() {
    return (
      <Cup>
          {/* カップの蓋 */}
          <Cup__top></Cup__top>
          {/* ストロー */}
          <Straw color={this.props.StrowColor}></Straw>
          <Straw__bottom color={this.props.StrowColor}></Straw__bottom>
          {/* カップの中身 */}
          <Cup__inner_wrap color={this.props.DrinkColor}>
          <Cup__inner_top color={this.props.DrinkColor}></Cup__inner_top>
          <Cup__inner color={this.props.DrinkColor}>
              <Tsubu_1 color={this.props.TapiocaColor}></Tsubu_1>
              <Tsubu_2 color={this.props.TapiocaColor}></Tsubu_2>
              <Tsubu_3 color={this.props.TapiocaColor}></Tsubu_3>
              <Tsubu_4 color={this.props.TapiocaColor}></Tsubu_4>
              <Tsubu_5 color={this.props.TapiocaColor}></Tsubu_5>
              <Tsubu_6 color={this.props.TapiocaColor}></Tsubu_6>
              <Tsubu_7 color={this.props.TapiocaColor}></Tsubu_7>
              <Tsubu_8 color={this.props.TapiocaColor}></Tsubu_8>
          </Cup__inner>
          <Cup__inner_bottom color={this.props.DrinkColor}></Cup__inner_bottom>
          </Cup__inner_wrap>
          {/* カップの底 */}
          <Cup__bottom></Cup__bottom>
      </Cup>
);
  }
}

// css
const Cup = styled.div`
  position: relative;
  width: 120px;
  height: 200px;
  background: #fff;
  &::before {
    content: ' ';
    border-right: 20px solid #fff;
    border-bottom: 200px solid transparent;
    border-radius: 6px 0 0 0;
    position: absolute;
    top: 0;
    left: -20px;
  }
  &::after {
    content: ' ';
    border-left: 20px solid #fff;
    border-bottom: 200px solid transparent;
    border-radius: 0 6px 0 0;
    position: absolute;
    top: 0;
    right: -20px;
  }
`
const Cup__bottom = styled.div`
width: 120px;
height: 40px;
border-radius: 60px / 20px;
background: #fff;
position: absolute;
bottom: -20px;
left: 0;
`
const Cup__top = styled.div`
  width: 170px;
  height: 30px;
  border-radius: 85px / 15px;
  background: #f5f5f5;
  z-index: 5;
  position: absolute;
  top: 5px;
  left: -24px;
  &::after {
    width: 170px;
    height: 30px;
    border-radius: 85px / 15px;
    background: #f5f5f5;
    z-index: 5;
    position: absolute;
    top: 5px;
    left: -24px;
    content: ' ';
    background: #fff;
    top: -15px;
    left: 0;
  }
  &::before {
    content: ' ';
    width: 170px;
    height: 13px;
    background: #f5f5f5;
    position: absolute;
  }
`
const Cup__inner_wrap = styled.div`
  position: absolute;
  bottom: 0;
  left: -40px;
`
const Cup__inner = styled.div`
  width: 110px;
  height: 150px;
  background: ${props => props.color};
  margin-left: 45px;
  position: relative;
  z-index: 2;
  &::before {
    content: ' ';
    border-right: 15px solid ${props => props.color};
    border-bottom: 150px solid transparent;
    border-radius: 3px 0 0 0;
    position: absolute;
    top: 0;
    left: -15px;
  }
  &::after {
    content: ' ';
    border-left: 15px solid ${props => props.color};
    border-bottom: 150px solid transparent;
    border-radius: 0 3px 0 0;
    position: absolute;
    top: 0;
    right: -15px;
  }
`
const Cup__inner_top = styled.div`
  width: 140px;
  height: 30px;
  background-color: #deb887;
  border-radius: 70px / 15px;
  z-index: 3;
  position: absolute;
  top: -12px;
  left: 30px;
`
const Cup__inner_bottom = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 55px / 15px;
  background-color: ${props => props.color};
  z-index: 1;
  position: absolute;
  top: 134px;
  left: 45px;
`
const Straw = styled.div`
  background: ${props => props.color};
  width: 20px;
  height: 70px;
  z-index: 5;
  position: absolute;
  top: -70px;
  left: 50px;
  &::before {
    content: ' ';
    width: 20px;
    height: 4px;
    background-color: ${props => props.color};
    border-radius: 10px / 2px;
    position: absolute;
    bottom: -2px;
  }
  &::after {
    content: ' ';
    width: 20px;
    height: 4px;
    background-color: ${props => props.color};
    border-radius: 10px / 2px;
    position: absolute;
    bottom: -2px;
    background-color: #a73836;
    top: -2px;
  }
`
const Straw__bottom = styled.div`
  background: ${props => props.color};
  width: 20px;
  height: 70px;
  z-index: 5;
  position: absolute;
  top: -70px;
  left: 50px;
  height: 30px;
  top: 30px;
  left: 50px;
  z-index: 4;
  &::before {
    content: ' ';
    width: 20px;
    height: 4px;
    background-color: ${props => props.color};
    border-radius: 10px / 2px;
    position: absolute;
    bottom: -2px;
  }
  &::after {
    content: ' ';
    width: 20px;
    height: 4px;
    background-color: ${props => props.color};
    border-radius: 10px / 2px;
    position: absolute;
    bottom: -2px;
    background-color: #a73836;
    top: -2px;
  }
`
const tsubu = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(3px);
}
`;
const Tsubu_1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 4px;
  left: 5px;
  animation: ${tsubu} 1.2s ease-in-out infinite alternate;
`
const Tsubu_2 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: -5px;
  left: 28px;
  animation: ${tsubu} 0.5s ease-in-out infinite alternate;
`
const Tsubu_3 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 2px;
  left: 55px;
  animation: ${tsubu} 1s ease-in-out infinite alternate;
`
const Tsubu_4 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: -2px;
  left: 81px;
  animation: ${tsubu} 0.6s ease-in-out infinite alternate;
`
const Tsubu_5 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 34px;
  left: 2px;
  animation: ${tsubu} 0.8s ease-in-out infinite alternate;
`
const Tsubu_6 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 25px;
  left: 30px;
  animation: ${tsubu} 0.7s ease-in-out infinite alternate;
`
const Tsubu_7 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 32px;
  left: 61px;
  animation: ${tsubu} 0.9s ease-in-out infinite alternate;
`
const Tsubu_8 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  bottom: 24px;
  left: 86px;
  animation: ${tsubu} 1.1s ease-in-out infinite alternate;
`

export default Tapioca;
