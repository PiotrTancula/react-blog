import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';
import Posts from '../features/Posts';
import PostAdd from './PostAdd';

const InsideSinglePost = () => {

  const { postId } = useParams();
  const currentPost = useSelector(state => getPostById(state, postId));


  return (
    <>
      <h1>Single Post</h1>
      <div className='d-flex justify-content-center'>
         <SinglePost key={currentPost.postId} {...currentPost} />
        <Button className='col-1 align-self-start'variant='outline-success' href='/post/add'>Edit</Button>
    </div>
    </>

  )
}

export default InsideSinglePost;