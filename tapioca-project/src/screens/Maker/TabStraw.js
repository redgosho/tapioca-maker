import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import ColorPalette from './ColorPalette';

class TabStrow extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Strow>
        <h1>やほ</h1>
        <ColorPalette />
      </Strow>
    )
  }
}
const Strow = styled.div`
  background: red;
`

export default TabStrow;
