import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const callStatusController = {
    // GET /callStatus
    getAll: async (req, res) => {
        try {
            const callStatus = await prisma.dbo_call_status.findMany();
            res.send(callStatus);
        } catch (err) {
            res.status(401).send('Cannot get Call Status');
        }
    },
    // GET /callStatus/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const callStatus = await prisma.dbo_call_status.findUnique({
                where: {
                    id: id
                }
            });
            res.send(callStatus);
        } catch (err) {
            res.status(401).send('Cannot get Call Status');
        }
    },
    // POST /callStatus
    create: async (req, res) => {
        try {
            const callStatus = await prisma.dbo_call_status.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(callStatus);
        } catch (err) {
            res.status(401).send('Cannot create Call Status');
        }
    },
    // PUT /callStatus/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const callStatus = await prisma.dbo_call_status.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(callStatus);
        } catch (err) {
            res.status(401).send('Cannot update Call Status');
        }
    },
    // DELETE /callStatus/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const callStatus = await prisma.dbo_call_status.delete({
                where: {
                    id
                }
            });
            res.send(callStatus);
        } catch (err) {
            res.status(401).send('Cannot delete Call Status');
        }
    }
};

export default callStatusController;