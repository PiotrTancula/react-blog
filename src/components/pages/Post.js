import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import InsideSinglePost from './InsideSinglePost';



const Post = () => {

  const { postId } = useParams();
  const currentPost = useSelector(state => getPostById(state, postId));

  console.log(currentPost);
  return (


        <Col  xs='12' md='6' lg='4'>


          <Card border="light">
            <Card.Body>
              <Card.Title>{currentPost.title}</Card.Title>
              <Card.Subtitle className="fw-bold">Author: <span className='fw-normal'>{currentPost.author}</span></Card.Subtitle>
              <Card.Subtitle className="fw-bold">Published: <span className='fw-normal'>{currentPost.publishedDate}</span></Card.Subtitle>
              <Card.Text>
                {currentPost.content}
              </Card.Text>
              {/* <Link to={`/post/${props.id}`}>
                <Button variant="primary">Readmore</Button>
              </Link> */}

            </Card.Body>
          </Card>
        </Col>
  )
}
export default Post;