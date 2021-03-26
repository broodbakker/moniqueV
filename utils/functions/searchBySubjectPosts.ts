//typescript
import { PostData } from "../../typescript"

export const searchBySubjectPosts = (selectedPost: string, posts: PostData[]) => {
  if (selectedPost === "recent") return posts
  const selectedPosts = posts.filter((content: PostData) =>
    content.attributes.onderwerp === selectedPost
  )
  return selectedPosts
}