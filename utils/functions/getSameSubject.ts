//typescript
import { PostData } from "../../typescript"
//functions
import { NotThisPost } from "./NotThisPost"
import { searchBySubjectPosts } from "./searchBySubjectPosts"

export const getSameSubject = (subject: string, posts: PostData[], notThisPost: string) => {
  const PostsBySubject = searchBySubjectPosts(subject, posts)
  return NotThisPost(PostsBySubject, notThisPost)
}
