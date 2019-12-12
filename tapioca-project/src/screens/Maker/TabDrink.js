import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import ColorPalette from './ColorPalette';

class TabDrink extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Drink>
        <h1>ドリンク</h1>
        <ColorPalette />
      </Drink>
    )
  }
}
const Drink = styled.div`
  background: red;
`
export default TabDrink;
