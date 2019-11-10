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
            <ColorPalette__2nd>
              <ColorButton color={"#ffebee"}></ColorButton>
              <ColorButton color={"#ffcdd2"}></ColorButton>
              <ColorButton color={"#ef9a9a"}></ColorButton>
              <ColorButton color={"#e57373"}></ColorButton>
              <ColorButton color={"#ef5350"}></ColorButton>
              <ColorButton color={"#f44336"}></ColorButton>
              <ColorButton color={"#e53935"}></ColorButton>
              <ColorButton color={"#d32f2f"}></ColorButton>
              <ColorButton color={"#c62828"}></ColorButton>
              <ColorButton color={"#b71c1c"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#F3E5F5"}></ColorButton>
              <ColorButton color={"#E1BEE7"}></ColorButton>
              <ColorButton color={"#CE93D8"}></ColorButton>
              <ColorButton color={"#BA68C8"}></ColorButton>
              <ColorButton color={"#AB47BC"}></ColorButton>
              <ColorButton color={"#9C27B0"}></ColorButton>
              <ColorButton color={"#8E24AA"}></ColorButton>
              <ColorButton color={"#7B1FA2"}></ColorButton>
              <ColorButton color={"#6A1B9A"}></ColorButton>
              <ColorButton color={"#4A148C"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#E8EAF6"}></ColorButton>
              <ColorButton color={"#C5CAE9"}></ColorButton>
              <ColorButton color={"#9FA8DA"}></ColorButton>
              <ColorButton color={"#7986CB"}></ColorButton>
              <ColorButton color={"#5C6BC0"}></ColorButton>
              <ColorButton color={"#3F51B5"}></ColorButton>
              <ColorButton color={"#3949AB"}></ColorButton>
              <ColorButton color={"#303F9F"}></ColorButton>
              <ColorButton color={"#283593"}></ColorButton>
              <ColorButton color={"#1A237E"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#E1F5FE"}></ColorButton>
              <ColorButton color={"#B3E5FC"}></ColorButton>
              <ColorButton color={"#81D4FA"}></ColorButton>
              <ColorButton color={"#4FC3F7"}></ColorButton>
              <ColorButton color={"#29B6F6"}></ColorButton>
              <ColorButton color={"#03A9F4"}></ColorButton>
              <ColorButton color={"#039BE5"}></ColorButton>
              <ColorButton color={"#0288D1"}></ColorButton>
              <ColorButton color={"#0277BD"}></ColorButton>
              <ColorButton color={"#01579B"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#E0F2F1"}></ColorButton>
              <ColorButton color={"#B2DFDB"}></ColorButton>
              <ColorButton color={"#80CBC4"}></ColorButton>
              <ColorButton color={"#4DB6AC"}></ColorButton>
              <ColorButton color={"#26A69A"}></ColorButton>
              <ColorButton color={"#009688"}></ColorButton>
              <ColorButton color={"#00897B"}></ColorButton>
              <ColorButton color={"#00796B"}></ColorButton>
              <ColorButton color={"#00695C"}></ColorButton>
              <ColorButton color={"#004D40"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#F1F8E9"}></ColorButton>
              <ColorButton color={"#DCEDC8"}></ColorButton>
              <ColorButton color={"#C5E1A5"}></ColorButton>
              <ColorButton color={"#AED581"}></ColorButton>
              <ColorButton color={"#9CCC65"}></ColorButton>
              <ColorButton color={"#8BC34A"}></ColorButton>
              <ColorButton color={"#7CB342"}></ColorButton>
              <ColorButton color={"#689F38"}></ColorButton>
              <ColorButton color={"#558B2F"}></ColorButton>
              <ColorButton color={"#33691E"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#FFFDE7"}></ColorButton>
              <ColorButton color={"#FFF9C4"}></ColorButton>
              <ColorButton color={"#FFF59D"}></ColorButton>
              <ColorButton color={"#FFF176"}></ColorButton>
              <ColorButton color={"#FFEE58"}></ColorButton>
              <ColorButton color={"#FFEB3B"}></ColorButton>
              <ColorButton color={"#FDD835"}></ColorButton>
              <ColorButton color={"#FBC02D"}></ColorButton>
              <ColorButton color={"#F9A825"}></ColorButton>
              <ColorButton color={"#F57F17"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#FFF3E0"}></ColorButton>
              <ColorButton color={"#FFF3E0"}></ColorButton>
              <ColorButton color={"#FFE0B2"}></ColorButton>
              <ColorButton color={"#FFCC80"}></ColorButton>
              <ColorButton color={"#FFB74D"}></ColorButton>
              <ColorButton color={"#FFA726"}></ColorButton>
              <ColorButton color={"#FF9800"}></ColorButton>
              <ColorButton color={"#F57C00"}></ColorButton>
              <ColorButton color={"#EF6C00"}></ColorButton>
              <ColorButton color={"#E65100"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#EFEBE9"}></ColorButton>
              <ColorButton color={"#D7CCC8"}></ColorButton>
              <ColorButton color={"#BCAAA4"}></ColorButton>
              <ColorButton color={"#A1887F"}></ColorButton>
              <ColorButton color={"#8D6E63"}></ColorButton>
              <ColorButton color={"#795548"}></ColorButton>
              <ColorButton color={"#6D4C41"}></ColorButton>
              <ColorButton color={"#5D4037"}></ColorButton>
              <ColorButton color={"#4E342E"}></ColorButton>
              <ColorButton color={"#3E2723"}></ColorButton>
            </ColorPalette__2nd>
            <ColorPalette__2nd>
              <ColorButton color={"#ECEFF1"}></ColorButton>
              <ColorButton color={"#CFD8DC"}></ColorButton>
              <ColorButton color={"#B0BEC5"}></ColorButton>
              <ColorButton color={"#90A4AE"}></ColorButton>
              <ColorButton color={"#78909C"}></ColorButton>
              <ColorButton color={"#607D8B"}></ColorButton>
              <ColorButton color={"#546E7A"}></ColorButton>
              <ColorButton color={"#455A64"}></ColorButton>
              <ColorButton color={"#37474F"}></ColorButton>
              <ColorButton color={"#263238"}></ColorButton>
            </ColorPalette__2nd>
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
  flex-direction: row;
  width: 100%;
  height: 50%;
`
const ColorPalette__2nd = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const ColorButton = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.color};
`
export default Title;
