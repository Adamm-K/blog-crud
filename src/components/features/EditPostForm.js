import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';
import { getPostById } from '../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {

  const dispatch = useDispatch();
  const {postId} = useParams();
  const postData = useSelector(state => getPostById(state, postId));

  let navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost({...post, postId}));
    navigate('/')
  };

  if(!postData) return <Navigate to="/" />;
  return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post" 
      title={postData.title} 
      author={postData.author} 
      publishedDate={postData.publishedDate} 
      shortDescription={postData.shortDescription} 
      content={postData.content} 
      category={postData.category} 
      id={postId}/>
  );
};

export default EditPostForm;