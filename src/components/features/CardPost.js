import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { dateToStr } from '../../utils/dateToStr';


const CardPost = ({title, author, publishedDate, category, shortDescription, id}) => {


  return (                  
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-1"><b>Author:</b> {author}</Card.Text>
        <Card.Text className="mb-1"><b>Published:</b> {dateToStr(publishedDate)}</Card.Text>
        <Card.Text><b>Category:</b> {category}</Card.Text>
        <Card.Text>{shortDescription}</Card.Text>
        <Link to={"/post/" + id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>   
  );
};

export default CardPost;