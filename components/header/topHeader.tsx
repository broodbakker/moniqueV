import React from 'react'
import Link from 'next/link'
//components
import { NavMobile } from "./navMobile"
//styles
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
//materialui
import { Box, Toolbar, InputBase, Hidden, IconButton, Button } from '@material-ui/core';
//icons
import { Menu, ContactPhone, Search } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => {
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main
  return (
    createStyles({
      root: {
        flexGrow: 1,
        background: `linear-gradient(90deg, ${primary} 40%, ${secondary} 100%)`
      },
      toolbar: {
        minHeight: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
          minHeight: theme.spacing(14),
        },
      },
      logoTitle: {
        flexGrow: 1,
        display: 'block',
        textDecoration: "none",
        color: "white",
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: 140,
        [theme.breakpoints.up('md')]: {
          width: "auto",
        },
        marginLeft: theme.spacing(1),
      },
      searchIcon: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: theme.spacing(0, 2),
        pointerEvents: 'none',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        fontSize: 16,
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
          width: '20ch',
        }
      },
      button: {
        fontSize: 12,
        marginRight: theme.spacing(4),
        borderRadius: theme.spacing(1),
        textTransform: "none",
        color: "white",
        borderColor: "white",
      },
      title: {
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 2
      },
      subtitle: {
        fontSize: 12,
        fontWeight: 100,
        fontStyle: "italic",
      },
      menuButton: {
        marginLeft: theme.spacing(2),
        color: "white"
      },
      contactLink: { textDecoration: "none", },
    }))
}
);

const TopHeader = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open)
  };

  return (
    <>
      <Box color="white" className={classes.root} >
        <Toolbar className={classes.toolbar} >
          <Link href="/">
            <a className={classes.logoTitle} >
              <span className={classes.title}>Cognovi</span>{" "}
              <Hidden xsDown>
                <span className={classes.subtitle} >het beste wetenschappelijke nieuws</span>
              </Hidden>
            </a>
          </Link>

          <Hidden xsDown>
            <Link href="/contact" >
              <a className={classes.contactLink}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ContactPhone />}
                  className={classes.button}
                >
                  Contact
                </Button>
              </a>
            </Link>
          </Hidden>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search fontSize="small" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Hidden smUp>
            <IconButton className={classes.menuButton} onClick={toggleDrawer(true)}>
              <Menu fontSize="small" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Box>

      <NavMobile state={state} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default TopHeader
