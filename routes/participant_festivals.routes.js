import { Router } from "express";
import  ParticipantFestivals from "../controllers/participants_festivals.controller.js"

const router = Router()

const Controller = new ParticipantFestivals();

router.post('/participant_festivals', Controller.createParticipantFestivals);
router.get('/participant_festivals', Controller.participanOfEvent);
router.post('/participant_festivals/events', Controller.eventOfParticipant);
router.post('/participant_festivals/longer', Controller.longerDate);
router.post('/participant_festivals/lower', Controller.lowerDate);


export default router