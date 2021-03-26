import React, { FunctionComponent } from 'react'
import Link from 'next/link'
//typescript
import { PostData } from "../typescript"
//styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//material ui
import { Box, Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        marginBottom: theme.spacing(10)
      },
      media: {
        height: "100%",
      },
      image: {
        flex: "0 0 6em"
      },
      title: {
        fontWeight: 600,
      },
      test: {
        lineHeight: 0.3
      },
      article: {
        backgroundColor: theme.palette.grey[50],
        marginBottom: theme.spacing(1),
        maxWidth: theme.spacing(100),
        height: theme.spacing(20), '&:hover': {
          background: "#f1f4f8",
        },
      },
      link: {
        textDecoration: "none",
      },
      titleArticle: {
        marginLeft: theme.spacing(1),
        fontWeight: 600,
        margin: "auto",
        color: theme.palette.primary.dark
      },
    }))
}
);


type LeesMeerProps = {
  posts: PostData[]
}

export const LeesMeer: FunctionComponent<LeesMeerProps> = ({ posts }) => {
  console.log("posts", posts)
  const classes = useStyles();
  return (
    <>

      {posts.length !== 0 && <div className={classes.root}>
        <Typography variant="subtitle1" className={classes.title} >
          Lees Meer
</Typography>
        {posts.map((post, index) => {
          if (index < 5) return <Post post={post} key={index} />
        })}
      </div>}
    </>
  )
}

type PostProps = {
  post: PostData
}

export const Post: FunctionComponent<PostProps> = ({ post }) => {
  const classes = useStyles();
  const update = post.slug
  const link = `/posts/${update}`;
  return (
    <Link href={link}>
      <a className={classes.link} >
        <Box p={1} boxShadow={1} borderRadius={4} display="flex" className={classes.article} >
          <Box className={classes.image}  >
            <CardMedia
              image={post.attributes.image}
              title="Contemplative Reptile"
              className={classes.media}
            />
          </Box>
          <Typography align="left" variant="caption" component="p" className={classes.titleArticle} >
            {post.attributes.titel}
          </Typography>
        </Box>
      </a>
    </Link>
  )
}

