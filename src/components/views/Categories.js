import { Container, Row, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import InsideSingleCategory from "../pages/InsideSingleCategory";

const Categories = () => {

  const postCategories = useSelector(state =>  state.postsCategory );
  const categoryId = useParams();
  return (
    <Container className="d-flex flex-column justify-content-between mb-5">
      <h1>All categories</h1>
      <ListGroup>
        {postCategories.map(category =>

          <ListGroup.Item>
            <Link key={category.description} to={`/categories/${category.description}`}>
              {category.description}

            </Link>
          </ListGroup.Item>)}

      </ListGroup>
    </Container>



  )


}

export default Categories;