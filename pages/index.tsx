import React, { FunctionComponent } from 'react'
//components
import Head from '../components/head'
import { Header } from '../components/header'
import { Posts } from '../components/posts'
//style
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//materialui
import { Container } from '@material-ui/core';
//functions
import { importBlogPosts } from "../utils/functions/importBlogposts";
//typescript
import { PostData } from "../typescript"

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        backgroundColor: theme.palette.BgColor
      },
      container: {
        backgroundColor: "white",
        paddingTop: theme.customVariables.navbarSmall,
        [theme.breakpoints.up('sm')]: { paddingTop: theme.customVariables.navbarBig, },
      }
    })
  )
});

type HomeProps = {
  posts: PostData[],
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  const classes = useStyles();
  return (
    <>
      <Head title="Home" />
      <Header />
      <div className={classes.root}>
        <Container maxWidth="md" className={classes.container}>
          <Posts selectedPosts={"recent"} posts={posts} />
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts: PostData[] = await importBlogPosts();
  return { props: { posts } }
}

export default Home

