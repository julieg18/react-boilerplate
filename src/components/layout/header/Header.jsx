import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material';

import useClasses from '@/components/layout/hooks/useClasses';

import Drawer from '../sidebar/Drawer';
import { MobileMenu, MobileMenuSection } from './MobileMenu';
import { ProfileMenu, DesktopMenuSection } from './DesktopMenu';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

export default function Header() {
  const classes = useClasses(styles);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Drawer />
          <HeaderLogo />
          <HeaderSearch />
          <div className={classes.grow} />
          <DesktopMenuSection
            handleProfileMenuOpen={handleProfileMenuOpen}
          />
          <MobileMenuSection
            handleMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <ProfileMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />
    </div>
  );
}
