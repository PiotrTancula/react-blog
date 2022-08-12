import { useParams } from "react-router-dom";
import EditPostForm from "../features/EditPostForm";
import { Navigate } from 'react-router-dom';



const PostEdit = () => {

  const { postId } = useParams();

  if (!postId) return (<Navigate to="/"/>);

  return (
    <>
      <h1>Postedit</h1>
      <EditPostForm postId={postId} />
    </>
  )

}

export default PostEdit;