// Modules
import express from 'express';

// Controllers
import { getAllPosts , getSinglePost, createPost, getPostsByUser,likePost} from '../controllers/postsController';

// Middlewares
import { getAccessToRoute } from '../middlewares/auth';

const router = express.Router();
// Routers
router.get('/all-posts', getAccessToRoute, getAllPosts);
router.get('/:id', getAccessToRoute, getAllPosts);
router.post('/create-post', getAccessToRoute, createPost);
router.get('/posts-by-user/:id', getAccessToRoute, getPostsByUser);
router.get('/like-post/:id', getAccessToRoute, likePost);

export default router;