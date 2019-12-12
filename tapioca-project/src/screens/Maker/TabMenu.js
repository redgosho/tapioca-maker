import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import TabStraw from './TabStraw';
import TabDrink from './TabDrink';
import TabTapioca from './TabTapioca';

const TAB_TYPES = {
  STRAW: 'STRAW',
  DRINK: 'DRINK',
  TAPIOCA: 'TAPIOCA'
};

const tabData = [
  {
    text: 'ストロー',
    type: TAB_TYPES.STRAW
  },
  {
    text: 'ドリンク',
    type: TAB_TYPES.DRINK
  },
  {
    text: 'タピオカ',
    type: TAB_TYPES.TAPIOCA
  }
];

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabType: TAB_TYPES.STRAW,
      StrowColor: this.props.StrowColor,
      DrinkColor: this.props.DrinkColor,
      TapiocaColor: this.props.TapiocaColor
    };
  }


  changeTab = tabType => {
    console.log('(changeTab)tabType:', tabType)
    this.setState({ currentTabType: tabType });
  }

  renderContents() {
    console.log('(renderContents)this.state.currentTabType:', this.state.currentTabType)
    if (this.state.currentTabType === TAB_TYPES.STRAW) {
      return <TabStraw />;
    } else if (this.state.currentTabType === TAB_TYPES.DRINK) {
      return <TabDrink />;
    } else if (this.state.currentTabType === TAB_TYPES.TAPIOCA) {
      return <TabTapioca />;
    }
    return null;
  }

  render() {
    return (
      <div>
        <Tabs
          currentTabType={this.state.currentTabType}
          tabData={tabData}
          onClick={this.changeTab}
        />
        <TabsContents>{this.renderContents()}</TabsContents>
      </div>
    );
  }
}

const Tabs = ({ currentTabType, tabData, onClick }) => (
  <TabCover>
    <ul>
      {tabData.map((tab, index) => (
        <li
          className={currentTabType === tab.type ? 'active' : ''}
          onClick={() => onClick(tab.type)}
          key={index}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  </TabCover>
);
const TabCover = styled.div`
  ul {
    padding: 0;
    li {
      width: calc(100%/3);
      height: 50px;
      border-bottom: 3px solid #c0392b;
      background-color: #d9d9d9;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      color: #565656;
      display: block;
      float: left;
      text-align: center;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    .active {
      background-color: #e74c3c;
      color: #ffffff;
    }
  }
`
const TabsContents = styled.div`
  // padding: 40px 40px 0;
  clear: both;
`

export default TabMenu;
