import React from 'react';
import styled from 'styled-components'
// コンポ読み込み
import TabStraw from './TabStraw';
import TabDrink from './TabDrink';
import TabTapioca from './TabTapioca';

const TAB_TYPES = {
  HOME: 'home',
  ABOUT: 'about',
  OTHERS: 'others'
};

const tabData = [
  {
    text: 'Home',
    type: TAB_TYPES.HOME
  },
  {
    text: 'About',
    type: TAB_TYPES.ABOUT
  },
  {
    text: 'Others',
    type: TAB_TYPES.OTHERS
  }
];


class TabMenu extends React.Component {
  state = {
    currentTabType: TAB_TYPES.HOME
  };

  changeTab = tabType => {
    this.setState({ currentTabType: tabType });
  }

  renderContents() {
    if (this.state.currentTabType === TAB_TYPES.HOME) {
      return <TabStraw />;
    } else if (this.state.currentTabType === TAB_TYPES.ABOUT) {
      return <TabDrink />;
    } else if (this.state.currentTabType === TAB_TYPES.OTHERS) {
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
      {tabData.map(tab => (
        <li
          className={currentTabType === tab.type ? 'active' : ''}
          onClick={() => onClick(tab.type)}
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
  padding: 40px 40px 0;
  clear: both;
`

export default TabMenu;
