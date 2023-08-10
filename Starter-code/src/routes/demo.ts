import express from 'express';
import con from '../controllers/demo';

const router = express.Router();

router.route('/').get(con.getAllDemo).post(con.createDemo);

router.route('/:id').get(con.getDemo).patch(con.updateDemo).delete(con.deleteDemo);

export default router;
