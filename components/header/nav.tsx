import React, { FunctionComponent } from 'react'
import { useRouter, NextRouter } from 'next/router'

//material ui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, useScrollTrigger, Tabs, Tab, Hidden } from '@material-ui/core';
//function
import { whichRouteHighlight } from "../../utils/functions/whichRouteToHighlight"
//globaldata
import { tabNameToIndex, indexToTabName } from "../../utils/globalData"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      margin: "auto",
    },
  },
  tab: {
    minHeight: theme.spacing(8),
    minWidth: theme.spacing(16),
    fontSize: 12
  },
}));


function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Nav = () => {
  const classes = useStyles();
  const router = useRouter()

  const routeIndex = whichRouteHighlight(indexToTabName, router)
  const [value, setValue] = React.useState(routeIndex);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    const path: string = tabNameToIndex[newValue]
    router.push(path)
  };

  return (
    <nav>
      <div className={classes.root}>
        <ElevationScroll >
          <AppBar position="static" color="default" elevation={0} >
            <Hidden xsDown>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable tabs "
                className={classes.tabs}
                selectionFollowsFocus
              >
                <Tab label="Recent"{...a11yProps(0)} className={classes.tab} />
                <Tab label="History"{...a11yProps(1)} className={classes.tab} />
                <Tab label="Nature"  {...a11yProps(2)} className={classes.tab} />
                <Tab label="Human"  {...a11yProps(3)} className={classes.tab} />
                <Tab label="Quirky"  {...a11yProps(4)} className={classes.tab} />
                <Tab label="Space"  {...a11yProps(5)} className={classes.tab} />
                <Tab label="Tech"  {...a11yProps(6)} className={classes.tab} />
              </Tabs>
            </Hidden >
          </AppBar>
        </ElevationScroll>
      </div >
    </nav>
  )
}

export default Nav
