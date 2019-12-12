import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import ColorPalette from './ColorPalette';

class TabDrink extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <Drink>
        <ColorPalette />
      </Drink>
    )
  }
}
const Drink = styled.div`
  background: red;
  height: 100%;
`
export default TabDrink;
