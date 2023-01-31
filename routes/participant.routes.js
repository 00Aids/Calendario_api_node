import { Router } from "express";
import ParticipantController from "../controllers/participant.controller.js"


const router = Router()

const Controller = new ParticipantController();

router.get('/participants',Controller.getParticipants);
router.get('/participant/:id',Controller.filterParticipants);
router.post('/participant',Controller.createParticipants);

export default router