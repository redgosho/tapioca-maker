import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ColorPalette from './ColorPalette';

class TabDrink extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TabPanel>
        <h1>やほ</h1>
        <ColorPalette />
      </TabPanel>
    )
  }
}

export default TabDrink;
