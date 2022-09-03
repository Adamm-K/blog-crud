import { getAllCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Categories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <section>
      <h1 className="mb-5">All categories</h1>
      <Row xs={1} md={5} className="g-3 justify-content-md-center" >
          {categories.map(category => (
        <Col >
            <Link to={"/category/" + category} key={category} className="m-3"><Button variant="primary"  className="px-5">{category}</Button></Link>
        </Col>
          ))}
      </Row>
    </section>
  )

}
export default Categories;