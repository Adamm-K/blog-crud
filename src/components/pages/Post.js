import { getPostById } from '../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useParams, Link,  Navigate } from 'react-router-dom';
import { useState } from 'react';
import ModalDelete from '../features/ModalDelete';
import { removePost } from '../../redux/postsRedux';
import { dateToStr } from '../../utils/dateToStr';

const Post = () => {

  const dispatch =  useDispatch();
  const {postId} = useParams();

  const postData = useSelector(state => getPostById(state, postId));

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () =>  setShowModal(true);    

  const handleRemove = e => {  
    e.preventDefault();
    dispatch(removePost( postId ));
    handleClose();   
  };

  if(showModal) return (
    <ModalDelete showModal={showModal} handleClose={handleClose} handleRemove={handleRemove} />
  );
  if(!postData) return <Navigate to="/" />;

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs="12" lg="5">
        <Card className="border-0">
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Text className="mb-1"><b>Author:</b> {postData.author}</Card.Text>
              <Card.Text><b>Published:</b> {dateToStr(postData.publishedDate)}</Card.Text>
              <Card.Text className="mt-2" dangerouslySetInnerHTML={{ __html: postData.content }} />          
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
        <Link to={"/edit/" + postId}>
          <Button variant="outline-info" className="m-2">Edit</Button>
        </Link>    
          <Button variant="outline-danger" onClick={handleShow}>Delete</Button> 
        </Col>
      </Row>
    </div>
  );
};

export default Post;