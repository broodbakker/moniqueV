//typescript
import { PostData } from "../../typescript"

export const NotThisPost = (Posts: PostData[], notThisPost: string) => {
  const PostsFiltered = Posts.filter((post: PostData) => {
    if (post.slug !== notThisPost)
      return post
  })
  return PostsFiltered
}


