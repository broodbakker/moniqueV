import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import clsx from 'clsx';

//styles
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
//material ui
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useScrollTrigger } from '@material-ui/core';
//icons
import { Mail, AccessTime, History, ContactMail, BatteryChargingFull, Nature, Accessibility, BrightnessHigh, Flight } from '@material-ui/icons'
//data
import { subjectNames } from "../../utils/globalData"


const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      list: {
        width: 250,
      },
      listItem: {
        '&:hover': {
          backgroundColor: "rgba(16,104,158,0.2)",
        },
      }
    }))
}
);

const icons = (index: number) => {
  if (index === 0) return <AccessTime />
  if (index === 1) return <History />
  if (index === 2) return <Nature />
  if (index === 3) return <Accessibility />
  if (index === 4) return <BrightnessHigh />
  if (index === 5) return <Flight />
  if (index === 6) return <BatteryChargingFull />
}

type ListNamesProps = {
  index: number;
  text: string;
}

const ListNames: FunctionComponent<ListNamesProps> = ({ index, text }) => {
  const classes = useStyles();
  const link = text === "Recent" ? "/" : `/${text}`
  return (
    <Link href={link.toLowerCase()}>
      <ListItem button key={text} className={classes.listItem}>
        <ListItemIcon >{icons(index)}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}

type NavMobileProps = {
  state: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const NavMobile: FunctionComponent<NavMobileProps> = ({ state, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <Drawer open={state} onClose={toggleDrawer(false)}>
      <nav>
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem button className={classes.listItem}>
            <ListItemText primary={"Menu"} />
          </ListItem>
          <Divider />
          <List>
            {subjectNames.map((text, index) => (<ListNames text={text} index={index} key={text} />))}
          </List>
          <Divider />
          <List>
            {['Contact'].map((text, index) => (
              <ListItem button key={text} className={classes.listItem}>
                <ListItemIcon>{index % 2 === 0 ? <ContactMail /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div >
      </nav>
    </Drawer>
  )
}