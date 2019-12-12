import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import ColorPalette from './ColorPalette';

class TabTapioca extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <Tapioca>
        <ColorPalette />
      </Tapioca>
    )
  }
}
const Tapioca = styled.div`
  background: green;
`

export default TabTapioca;
