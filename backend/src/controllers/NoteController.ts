import {Request, Response} from "express";
import NoteService from "../services/NoteService";
import {noteSchema, idSchema, editNoteSchema} from "../helpers/validations";

class NoteController{
    async create(req: Request,res: Response){
        try {
            console.log(req.body)
            const note = await noteSchema.validate(req.body, {stripUnknown: true})
            const newNotes = NoteService.create(note)
            res.status(200).json(newNotes)
        }catch (e: any){
            res.status(400).json(e.message)
        }
}
    async removeOne(req: Request,res: Response){
        try{
            const id = await idSchema.validate(req.params.id, {stripUnknown: true})
            const notes = NoteService.removeOne(id)
            res.status(200).json(notes)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
    removeAll(req: Request,res: Response){
        try{
            const note = NoteService.removeAll()
            res.status(200).json(note)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }

    async update(req: Request,res: Response){
        try{
            const id = await idSchema.validate(req.params.id, {stripUnknown: true})
            const note = await editNoteSchema.validate(req.body, {stripUnknown: true})
            const updateNote = NoteService.update(note, id)
            res.status(200).json(updateNote)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req: Request,res: Response){
        try{
            const id = await idSchema.validate(req.params.id, {stripUnknown: true})
            const note = NoteService.getOne(id)
            res.status(200).json(note)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
    getAll(req: Request,res: Response){
        try{
            const notes = NoteService.getAll()
            res.status(200).json(notes)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
    getStats(req: Request,res: Response){
        try{
            const status: number = NoteService.getStats()
            res.status(200).json(status)
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }
}

export default new NoteController()