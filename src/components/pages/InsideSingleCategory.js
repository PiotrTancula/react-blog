import { useSelector } from "react-redux";
import { getSingleCategory } from "../../redux/postsRedux";
import { useParams } from 'react-router';

const InsideSingleCategory = ({categoryId}) => {



  const categoryPosts = useSelector(state => getSingleCategory(state, categoryId));

  return (
    <>
      <h1>Inside single category</h1>
      <ul>
    {categoryPosts.map(category => <li>aaaa</li> )}
    </ul>
      </>
  )


}

export default InsideSingleCategory;