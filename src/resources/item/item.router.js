import { Router } from 'express';

const controller = (req, res) => {
  res.send({message: 'hello'});
}

const router = Router();

router.route('/')
  .get(controller)
  .post(controller);

router.route('/:id')
  .put(controller)
  .deltete(controller)
  .get(controller)

export default router;
