import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

const AddPostForm = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/')
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post"/>
  );
};

export default AddPostForm; 