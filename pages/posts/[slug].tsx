import React, { FunctionComponent } from 'react'
//components
import { Header } from '../../components/header'
import { ContentPost } from '../../components/posts/contentPost'
import { LeesMeer } from '../../components/leesMeer'
//functions
import { importBlogPosts } from "../../utils/functions/importBlogposts";
import { getSameSubject } from "../../utils/functions/getSameSubject"
//typescript
import { PostData } from "../../typescript"
//styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      headerBar: {
        boxShadow: "none",
        width: "100%",
        position: "fixed",
        zIndex: 10
      },
      container: {
        backgroundColor: "white",
        paddingTop: theme.customVariables.navbarSmall,
        [theme.breakpoints.up('sm')]: { paddingTop: theme.customVariables.navbarBig, },
      }
    })
  )
});

type DynamicPageProps = {
  post: PostData,
  PostsWithSameSubject: PostData[]
}

const DynamicPage: FunctionComponent<DynamicPageProps> = ({ post, PostsWithSameSubject }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBar}>
        <Header />
      </Box>
      <Container className={classes.container} maxWidth="md">
        <ContentPost post={post} />
        <LeesMeer posts={PostsWithSameSubject}></LeesMeer>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const posts: PostData[] = await importBlogPosts()
  const slugs = posts.map((post: PostData) => { return `/posts/${post.slug}` })
  return {
    paths: [...slugs,],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const posts: PostData[] = await importBlogPosts()

  const post: PostData = await import(`../../src/posts/${context.params.slug}.md`).catch(error => null);

  const PostsWithSameSubject = getSameSubject(post.attributes.onderwerp, posts, post.slug)

  const json: PostData = JSON.parse(JSON.stringify(post));
  return {
    props: { post: json, PostsWithSameSubject }
  }
}

export default DynamicPage