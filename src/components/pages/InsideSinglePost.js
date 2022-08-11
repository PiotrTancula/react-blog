import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';
import Posts from '../features/Posts';
import PostAdd from './PostAdd';
import Post from './Post';


const InsideSinglePost = () => {

  const { postId } = useParams();
  const currentPost = useSelector(state => getPostById(state, postId));


  return (
    <>
      <h1>Single Post</h1>
      <div className='d-flex justify-content-center'>
        <Post key={currentPost.postId} {...currentPost} />
        <Button className='col-1 align-self-start  mx-2' variant='outline-info' href={`/post/edit/${postId}`} >Edit</Button>
        <Button className='col-1 align-self-start'variant='outline-danger' href='/post/add'>Delete</Button>
    </div>
    </>

  )
}

export default InsideSinglePost;