import React, { FunctionComponent } from 'react'
//components
import { ListOfPosts } from "./listOfPosts"
import { HeadPost } from "./headPost"
//styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//material ui
import { Divider, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
//typescript
import { PostData } from "../../typescript"
//functions
import { paginationLogic, howManyPostsOnPage } from "../../utils/functions/paginationLogic"
import { searchBySubjectPosts } from '../../utils/functions/searchBySubjectPosts';
import { listWithoutFirstElement } from "../../utils/functions/listWithoutFirstElement"

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        marginBottom: theme.spacing(10),
      },
    }))
}
);

type PostsProps = {
  selectedPosts: string
  posts: PostData[],
}

export const Posts: FunctionComponent<PostsProps> = ({ selectedPosts, posts }) => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = React.useState(0);

  const postsBySubject = searchBySubjectPosts(selectedPosts, posts)

  //removed the first on list
  const postsModified = listWithoutFirstElement(postsBySubject)


  const [postsPerPage, setpostsPerPage] = React.useState(paginationLogic(1, postsModified));

  const handleChange = (event: any, pageNumber: number) => {
    setPageNumber(pageNumber);
    setpostsPerPage(paginationLogic(pageNumber, postsModified))
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h2">Het laatste nieuws</Typography>
      <Divider />
      <HeadPost post={postsBySubject[0]} />
      <ListOfPosts posts={postsPerPage} />
      <Pagination count={howManyPostsOnPage(postsBySubject)} page={pageNumber} color="primary" onChange={handleChange} />
    </div>
  )
}