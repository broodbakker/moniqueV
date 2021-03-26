import React, { FunctionComponent } from 'react'

import { Box, Button, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CreateIcon from '@material-ui/icons/Create';
// import LeesMeer from './leesMeer';
import { isoDateToStandardDate } from "../../utils/functions/dateFormatting"
//typescript
import { PostData } from "../../typescript"

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        height: "100%",
      },
      html: {

      },
      title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2)
      },
      auteurcon: {
        marginBottom: theme.spacing(2)
      },
      subtitel: {
        fontWeight: 600
      },
      con: {
        maxHeight: theme.spacing(100),
        maxWidth: 600,
        margin: "0 auto"
      },
      margin: {
        marginRight: theme.spacing(2),
      },
      content: {
        marginTop: theme.spacing(5),
      },
      media: {
        height: "100%",
        position: "relative"
      },
      author: { marginRight: theme.spacing(2) },
      tags: { marginBottom: theme.spacing(10) },

    })
  )
});

type ContentPostProps = {
  post: PostData
}

export const ContentPost: FunctionComponent<ContentPostProps> = ({ post }) => {
  const classes = useStyles();
  return (
    <div>
      {post &&
        <div>
          <Box height="60vw" className={classes.con}>
            <Card className={classes.root}>
              <CardMedia
                image={post.attributes.image}
                title={classes.content}
                className={classes.media}
                src="test"
              >
              </CardMedia>
            </Card>
          </Box>
          <div>
            <Typography variant="h6" component="h1" className={classes.title}>
              {post.attributes.titel}
            </Typography>
            <div className={classes.auteurcon}>
              <CreateIcon fontSize="small" />
              <Typography variant="subtitle2" component="p" display="inline" className={classes.author} >
                {post.attributes.auteur}
              </Typography>

              <Typography component="p" display="inline" >

              </Typography>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" component="time" display="inline"  >
                {" "}{isoDateToStandardDate(post.attributes.date)}{" "}
              </Typography>
            </div>

            <div className={classes.tags}>
              <Button variant="contained" size="small" color="primary" className={classes.margin}>
                science
        </Button>

              <Button variant="contained" size="small" color="primary" className={classes.margin}>
                health
        </Button>

              <Button variant="contained" size="small" color="primary" className={classes.margin}>
                monique
        </Button>
            </div>
            <Typography variant="body1" component="h3" className={classes.subtitel} >
              {post.attributes.Subtitel}
            </Typography>
          </div>

          { }


          <div className={classes.html} dangerouslySetInnerHTML={{ __html: post.html }}></div>
          {/* <LeesMeer nameOfCategory={blogpost.attributes.onderwerp} notThisArticle={blogpost.attributes.titel} /> */}
        </div>}
    </div>
  )
}

export default ContentPost
