import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink, Navigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import SinglePost from '../views/SinglePost';
import Posts from '../features/Posts';
import PostAdd from './PostAdd';
import Post from '../views/Post';
import { useState } from 'react';
import ModalButton from '../common/ModalButton';


const InsideSinglePost = () => {

  const [showModal, setShowModal] = useState(false);

  const { postId } = useParams();
  const currentPost = useSelector(state => getPostById(state, postId));

  const updateShowModal = () => {
    setShowModal(!showModal);
    console.log('dziala');
    console.log(showModal);
  }

  return (
    <>
      <h1>Single Post</h1>
      <div className='d-flex justify-content-center'>
        <Post key={currentPost.postId} {...currentPost} />
        <Button className='col-1 align-self-start  mx-2' variant='outline-info' href={`/post/edit/${postId}`} >Edit</Button>
        {/* <Button className='col-1 align-self-start'variant='outline-danger'  showmodal={showModal} onClick={updateShowModal}>Delete</Button> */}
        <ModalButton showmodal={showModal} updateshowmodal={updateShowModal} postId={postId} />
      </div>
    </>

  )
}

export default InsideSinglePost;