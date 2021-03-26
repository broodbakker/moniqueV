

import React, { FunctionComponent } from 'react'
import Link from 'next/link'

//typescript
import { PostData } from "../../typescript"
//material ui
import { Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      container: {
        maxHeight: theme.spacing(100),
        marginTop: theme.spacing(2)
      },
      root: {
        height: "100%",
      },
      media: {
        height: "100%",
        position: "relative"
      },
      content: {
        position: "absolute",
        bottom: 0,
      },
      title: {
        lineHeight: 1,
        fontWeight: 900,
        color: theme.palette.grey[50],
        textShadow: theme.palette.textShadow,
        [theme.breakpoints.up('sm')]: { fontSize: 30 },
      }
    }))
})

type HeadPostsProps = {
  post: PostData
}

export const HeadPost: FunctionComponent<HeadPostsProps> = ({ post }) => {
  const classes = useStyles();
  const { slug, attributes } = post
  return (
    <Box height="40vw" className={classes.container}>
      {post &&
        <>
          <Link href={`/posts/${slug}`}>
            <a>
              <Card className={classes.root}>
                <CardMedia
                  image={attributes.image}
                  title={classes.content}
                  className={classes.media}
                  src={attributes.image}
                >
                  <CardContent className={classes.content}>
                    <Box>
                      <Typography variant="subtitle1" color="secondary" align="left" component="h1" className={classes.title}>
                        {attributes.titel}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardMedia>
              </Card>
            </a>
          </Link>
        </>
      }
    </Box>)
}


