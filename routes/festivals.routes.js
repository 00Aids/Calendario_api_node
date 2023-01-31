import { Router } from "express";
import  FestivalsController from "../controllers/festivals.controller.js"

const router = Router()

const Controller = new FestivalsController();

router.get('/festivals', Controller.getFestivals);
router.post('/festivals', Controller.createFestivals);
router.get('/festivals/an/:year', Controller.getYear);
router.get('/festivals/mes/:month', Controller.getMonth);
router.get('/festivals/dia/:day', Controller.getDay);
router.post('/festivals/buscar', Controller.betweenDates);

/*router.get('/festivals/Elderly',Controller.getYearElderly);
router.get('/festivals/Smaller', Controller.getYearSmaller);*/


export default router