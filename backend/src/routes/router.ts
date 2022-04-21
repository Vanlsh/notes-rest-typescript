import {Router,} from "express";
import NoteController from "../controllers/NoteController";

// @ts-ignore
export const router = new Router()

router.post('/notes', NoteController.create)
router.delete('/notes/:id', NoteController.removeOne)
router.delete('/notes', NoteController.removeAll)
router.patch('/notes/:id', NoteController.update)
router.get('/notes/stats', NoteController.getStats)
router.get('/notes/:id', NoteController.getOne)
router.get('/notes', NoteController.getAll)


