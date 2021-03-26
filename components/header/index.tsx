import React from 'react'
import TopHeader from "./topHeader"
import Nav from './nav';
//style
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      headerBar: {
        position: "fixed",
        width: "100%",
        zIndex: 10,
        boxShadow: "none"
      }
    })
  )
});

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerBar}>
      <TopHeader />
      <Nav />
    </div>)
}