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
        <Tapioca__area>
          <Tapioka__board>
            <Tapioca />
          </Tapioka__board>
        </Tapioca__area>
      </Main__area>
      <Custom_area>
        <Custom__borad>
        <ColorPalette>
            <ColorButton color={"red"}></ColorButton>
            <ColorButton color={"blue"}></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
            <ColorButton></ColorButton>
          </ColorPalette>
        </Custom__borad>
      </Custom_area>
    </Body>
  );
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
const Main__area = styled.div`
  display: block;
  height: 100%;
  width: 50%;
  position: relative;
  flex-direction: column;
`
const Tapioca__area = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background: #CCFFFF;
  margin: auto;
`
const Tapioka__board = styled.div`
  // 縦横中央寄せ
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
`
const Custom_area = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
  background: linear-gradient(#ccc, #fff);
`
const Custom__borad = styled.div`
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: absolute;
  width: 95%;
  height: 95%;
  // 縦横中央寄せ
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);
  &::before {
    content: "";
    height: 98%;
    position: absolute;
    width: 100%;
    z-index: -1;
    background: #fafafa;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    left: -5px;
    top: 4px;
    transform: rotate(-2.5deg);
  }
  &::after {
    content: "";
    height: 98%;
    position: absolute;
    width: 100%;
    z-index: -1;
    background: #f6f6f6;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    right: -3px;
    top: 1px;
    transform: rotate(1.4deg);
  }
`
const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ColorButton = styled.div`
  height: 50px;
  width: 50px;
  margin: 10px;
  background: ${props => props.color};
`
export default Title;
