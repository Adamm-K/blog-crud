import { useParams } from 'react-router-dom';
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Post = () => {

  const {postId} = useParams();
  const postData = useSelector(state => getPostById(state, postId))

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col xs="12" lg="5">
        <Card className="border-0">
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Subtitle className="mb-1">Author: <span as={Card.Text}>{postData.author}</span></Card.Subtitle>
              <Card.Subtitle>Published: {postData.publishedDate}</Card.Subtitle>
              <Card.Text className="mt-2">{postData.content}</Card.Text>         
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
        <Link to="/post/edit">
          <Button variant="outline-info" className="m-2">Edit</Button>
        </Link>
        <Link to="/">
          <Button variant="outline-danger">Delete</Button>
        </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Post;