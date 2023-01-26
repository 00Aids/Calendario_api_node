import { Router } from "express";
import { getFestivals, createFestivals,deleteFestivals,updateFestivals  } from "../controllers/festivals.controller.js"

const router = Router()

router.get('/festivals', getFestivals);
router.post('/festivals', createFestivals);
router.delete('/festivals/:id',deleteFestivals);
router.put('/festivals/:id', updateFestivals);

export default router