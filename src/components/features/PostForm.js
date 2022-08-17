import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import shortid from "shortid";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateToStr } from "../../utils/dateToStr";


  const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    // const { postId } = useParams();

    const handleSubmit = (e) => {

      e.preventDefault();
      action({ title, author, publishedDate, shortDescription, content });

    }
  return (

    <div className="w-100 ps-5" >
      <Form onSubmit={handleSubmit}>
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
          <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
          {/* <Form.Control type="text " placeholder="Published date " value={publishedDate} onChange={ e => setPublishedDate(e.target.value) } /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="shortdescription">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" rows={3} value={shortDescription} onChange={ e => setShortDescription(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="maincontent">
          <Form.Label >Main content</Form.Label>
          {/* <Form.Control as="textarea" rows={4} value={content} onChange={ e => setContent(e.target.value) }/> */}
          <ReactQuill    theme="snow" rows={4} value={content} onChange={setContent} />
        </Form.Group>

          <Button type="submit" variant="primary" >{actionText}</Button>

      </Form>

    </div>


  )

  }

  export default PostForm;