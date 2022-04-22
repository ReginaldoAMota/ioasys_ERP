import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const callNoteController = {
    // GET /callNote
    getAll: async (req, res) => {
        try {
            const callNote = await prisma.dbo_call_note.findMany({
                where: {
                    company: req.company
                }
            });
            res.send(callNote);
        } catch (err) {
            res.status(401).send('Cannot get Call Notes');
        }
    },
    // GET /callNote/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const callNote = await prisma.dbo_call_note.findUnique({
                where: {
                    id: id,
                    company: req.company
                }
            });
            res.send(callNote);
        } catch (err) {
            res.status(401).send('Cannot get Call Note');
        }
    },
    // POST /callNote
    create: async (req, res) => {
        try {
            const callNote = await prisma.dbo_call_note.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(callNote);
        } catch (err) {
            res.status(401).send('Cannot create Call Note');
        }
    },
    // PUT /callNote/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const callNote = await prisma.dbo_call_note.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(callNote);
        } catch (err) {
            res.status(401).send('Cannot update Call Note');
        }
    },
    // DELETE /callNote/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const callNote = await prisma.dbo_call_note.delete({
                where: {
                    id
                }
            });
            res.send(callNote);
        } catch (err) {
            res.status(401).send('Cannot delete Call Note');
        }
    }
};

export default callNoteController;