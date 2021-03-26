
import React, { FunctionComponent } from 'react'
import Link from 'next/link'

//material ui
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles, fade, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography, CardMedia } from '@material-ui/core';
//typescript
import { PostData } from "../../typescript"
//functions
import { isoDateToStandardDate } from "../../utils/functions/dateFormatting"

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
      },
      media: {
        height: "100%",
      },
      image: {
        flex: "0 0 6rem"
      },
      title: {
        marginLeft: theme.spacing(1),
        fontWeight: 600,
        margin: "auto",
        color: theme.palette.primary.dark,
        lineHeight: 1
      },
      post: {
        backgroundColor: theme.palette.BgColor,
        height: theme.spacing(20),
        '&:hover': {
          background: theme.palette.primary.main,
        },
      },
      link: {
        textDecoration: "none",
        width: "100%",
      },
      time: {
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(1),
        position: "absolute",
        bottom: 0,
        width: "100%"
      },
      date: {
        fontSize: 12,
      },
      content: {
        position: "relative",
        marginRight: theme.spacing(2),
        flexGrow: 1
      }
    }))
}
);


type ListOfPostsProps = {
  posts: PostData[]
}

export const ListOfPosts: FunctionComponent<ListOfPostsProps> = ({ posts }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} >
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {posts.map((content: any, index: any) => {
          const update = content.slug
          const link = `/posts/${update}`;
          const newDate = isoDateToStandardDate(content.attributes.date)
          return (
            <Grid container item xs={12} sm={6} key={index}>
              <Link href={link} >
                <a className={classes.link}>
                  <Box p={1} boxShadow={1} borderRadius={4} display="flex" className={classes.post} >
                    <Box className={classes.image}>
                      <CardMedia
                        image={content.attributes.image}
                        title="Contemplative Reptile"
                        className={classes.media}
                      />
                    </Box>
                    <div className={classes.content}>
                      <Typography align="left" variant="caption" component="p" className={classes.title}>
                        {content.attributes.titel}
                      </Typography>
                      <Box className={classes.time}>
                        <AccessTimeIcon fontSize="small" className={classes.date} />
                        <Typography variant="subtitle2" component="time" display="inline" className={classes.date}>
                          {" "}{newDate}
                        </Typography>
                      </Box>
                    </div>
                  </Box>
                </a>
              </Link>
            </Grid>
          )
        })}
      </Grid >
    </Box >
  )
}