import CardPost from '../features/CardPosts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Row className="justify-content-end">
        <Col>
          <h1>All posts</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2"> 
          <Link to="/post/add">
            <Button variant="outline-info">Add post</Button>{' '} 
          </Link>
        </Col>
      </Row>
      <CardPost />
    </div>
  );
}

export default Home;