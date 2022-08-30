import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import { Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

const  App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/post/add' element={<PostAdd />} />
          <Route path='/post/edit' element={<PostEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
