import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import InsideSinglePost from './InsideSinglePost';



const SinglePost = (props) => {

  const { postId } = useParams();
  const currentPost = useSelector(state => getPostById(state, postId));



  console.log(currentPost);
  return (
    <Col  xs='12' md='6' lg='4'>
      <Card >
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="fw-bold">Author: <span className='fw-normal'>{props.author}</span></Card.Subtitle>
          <Card.Subtitle className="fw-bold">Published: <span className='fw-normal'>{props.publishedDate}</span></Card.Subtitle>
          <Card.Text>
            {props.shortDescription}
          </Card.Text>
          {/* <Link to={`/post/${props.id}`}>
            <Button variant="primary">Readmore</Button>
          </Link> */}
            <Button href={`/post/${props.id}`}>Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SinglePost;