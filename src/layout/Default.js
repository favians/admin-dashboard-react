import React, { memo } from 'react';
import NavigationDrawer from 'components/navigationDrawer/navigationDrawer';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BallotIcon from '@material-ui/icons/Ballot';
import CachedIcon from '@material-ui/icons/Cached';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const title = 'Admin Dashboard';
const menu = [
  {
    name: 'Home',
    icon: <InboxIcon />,
    to: '/',
  },
  {
    name: 'Dot Env',
    icon: <ApartmentIcon />,
    to: '/dotenv/dotenv',
  },
  {
    name: 'Layout Example',
    icon: <BallotIcon />,
    to: '/layoutExample',
  },
  {
    name: 'Redux Example',
    icon: <AttachMoneyIcon />,
    to: '/reduxExample',
  },
  {
    name: 'Request',
    icon: <CachedIcon />,
    to: '/request',
  },
  {
    name: 'User Sagalul',
    icon: <ChildCareIcon />,
    to: '/user/sagalul',
  },
  {
    name: 'User Kelpo',
    icon: <ChildCareIcon />,
    to: '/user/kelpo',
  },
];

const DefaultLayout = ({ children }) => (
  <NavigationDrawer title={title} menu={menu}>
    { children }
  </NavigationDrawer>
);

export default memo(DefaultLayout);
