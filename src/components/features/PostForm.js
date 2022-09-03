import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { getAllCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {

  let navigate = useNavigate();

  const id = props.id;
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const categories = useSelector(getAllCategories);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    setCategoryError(!category);

    if (content && publishedDate && content !== '<p><br></p>') {
      action({ title, author, publishedDate, shortDescription, content, id, category });
      navigate('/');
    }
  }

  return (
    <Row>
      <Col md={{span: 6, offset: 3}}>
        <h1>{actionText}</h1>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3 w-50">
            <Form.Label >Title</Form.Label>
            <Form.Control 
              {...register("title", { required: true, minLength: 3 })}
              value={title} 
              type="text" 
              placeholder="Enter title" 
              onChange={e => setTitle(e.target.value)} 
            />
            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and has to be at least 3 characters long</small>}
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label >Author</Form.Label>
            <Form.Control 
              {...register("author", { required: true, minLength: 3 })}              
              type="text" 
              placeholder="Enter author" 
              value={author} 
              onChange={e => setAuthor(e.target.value)}
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and has to be at least 3 characters long</small>}
          </Form.Group>
          <Form.Group className="mb-3 w-50">
          <Form.Label >Published</Form.Label>
          <DatePicker 
              selected={publishedDate}               
              onChange={(date) => setPublishedDate(date)} 
            />
           {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>   
            <Form.Control {...register("category", { required: true})}
              as="select"
              placeholder="Please select category"
              value={category ? category : "1"}
              onChange={e => setCategory(e.target.value)}>
                <option disabled value="1">Select category...</option>
               {categories.map((category, index) => <option key={index} value={category}>{category}</option> )}   
            </Form.Control>            
            {categoryError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label value={shortDescription}>Short description</Form.Label>              
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control
                {...register("shortDescription", { required: true, minLength: 20 })}
                      as="textarea" 
                      placeholder="Leave a comment here" 
                      style={{ height: '100px' }} 
                      value={shortDescription} 
                      onChange={e => setShortDescription(e.target.value)}
                    />
            </FloatingLabel>
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required and has to be at least 20 characters long</small>}
          </Form.Group> 
          <Form.Group>
          <Form.Label value={content}>Main content</Form.Label>   
             <ReactQuill
             theme="snow"   
             value={content} 
             onChange={setContent}
             placeholder="Type here" 
             />
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}       
          </Form.Group>           
          <Button className="mt-3" as="input" type="submit" value={actionText} />{' '}        
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm; 