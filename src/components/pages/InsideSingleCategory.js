import { useSelector } from "react-redux";
import { getSingleCategory } from "../../redux/postsRedux";
import { useParams } from 'react-router';

const InsideSingleCategory = () => {

  const { categoryId } = useParams();

  const categoryPosts = useSelector(state => getSingleCategory(state, categoryId));



  return (
    <>
      <h1>Category : {categoryId}</h1>
      <ul>
        {categoryPosts.map(category => <li key={category.id}>info</li>)}
      </ul>
      </>
  )


}

export default InsideSingleCategory;