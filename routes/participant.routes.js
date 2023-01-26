import { Router } from "express";
import { getParticipants, filterParticipants, createParticipants,deleteParticipans,updateParticipans  } from "../controllers/participant.controller.js"


const router = Router()

router.get('/participants', getParticipants);
router.get('/participant/:id', filterParticipants);
router.post('/participant', createParticipants);
router.delete('/participant/:id',deleteParticipans);
router.put('/participant/:id', updateParticipans);

export default router