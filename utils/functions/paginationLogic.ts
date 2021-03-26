//typescript
import { PostData } from "../../typescript"
//globalData
import { postsPerPage } from "../globalData"

export const paginationLogic = (pageNumber: number, posts: PostData[]) => {
  const start = (pageNumber - 1) * postsPerPage
  const end = start + postsPerPage
  const newPosts = posts.filter((post: PostData, index: number) =>
    index >= start && end > index
  )
  return newPosts
}

export const howManyPostsOnPage = (posts: PostData[]) => {
  const howManyPosts = posts.length
  return Math.ceil(howManyPosts / postsPerPage)
}