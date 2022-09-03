import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../redux/postsRedux';
import CardPost from '../features/CardPost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PostsByCategory = () => {

  const {postCategory} = useParams();
  const postData =  useSelector(state => getPostByCategory(state, postCategory));
  
  if(postData.length === 0) return (
    <div>
      <h1>Category: {postCategory}</h1>
      <p>No posts in this category</p>
    </div>
  );
  
  return (
    <div>
      <Row className="justify-content-end">
        <Col>
          <h1>Category: {postCategory}</h1>
        </Col>
        <Col className="d-flex flex-row-reverse p-2"> 
          <Link to="/post/add">
            <Button variant="outline-info">Add post</Button>{' '} 
          </Link>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-3 justify-content-md-center">
      {postData.map(post => (
        <Col key={post.id}>
          <CardPost {...post}/>
        </Col>
      ))}
      </Row>
    </div>
  );
}

export default PostsByCategory;