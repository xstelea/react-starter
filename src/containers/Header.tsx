import {
  AppBar,
  Avatar,
  Button,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import { parse } from 'query-string';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  CheckSessionAction,
  getAuth,
  HandleCallbackAction,
  LoginAction,
  LogoutAction,
} from '../store';

const UserActions = ({ pathname }: { pathname: string }) => {
  const auth = useSelector(getAuth);

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const logout = () => {
    handleClose();
    dispatch(new LogoutAction());
  };

  return auth ? (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar src={auth.picture} />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
        >
          <MenuItem onClick={logout}>Log out</MenuItem>
        </Menu>
      </div>
    </ClickAwayListener>
  ) : (
    <Button color="inherit" onClick={() => dispatch(new LoginAction(pathname))}>
      Login
    </Button>
  );
};

export const Header = ({
  location: { search, pathname },
  history,
}: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { code, state, error } = parse(search);

  if (code && state) {
    dispatch(new HandleCallbackAction(history));
  } else if (!error) {
    dispatch(new CheckSessionAction());
  }

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <UserActions pathname={pathname} />
      </Toolbar>
    </AppBar>
  );
};
