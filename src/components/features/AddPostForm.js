import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [mainContent, setMainContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, published, shortDescription, mainContent }));
    setTitle('');
    setAuthor('');
    setPublished('');
    setShortDescription('');
    setMainContent('');
    navigate('/');
  }

  return (
    <>
      <div className="w-50 mx-auto">
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text " placeholder="Title " value={title} onChange={ e => setTitle(e.target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text " placeholder="Author "  value={author} onChange={ e => setAuthor(e.target.value) }/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="published">
            <Form.Label>Published</Form.Label>
            <Form.Control type="text " placeholder="Published date " value={published} onChange={ e => setPublished(e.target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="shortdescription">
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={3} value={shortDescription} onChange={ e => setShortDescription(e.target.value) }/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="maincontent">
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" rows={4} value={mainContent} onChange={ e => setMainContent(e.target.value) }/>
          </Form.Group>
          <Button type="submit" variant="primary">Add post</Button>
        </form>

      </div>
    </>
  )


}

export default AddPostForm;