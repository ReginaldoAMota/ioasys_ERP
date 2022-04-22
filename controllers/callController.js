import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const callController = {
    // GET /call
    getAll: async (req, res) => {
        try {
            const calls = await prisma.dbo_call.findMany(
                {
                    where: {
                        company: req.company
                    }
                }

            );
            res.send(calls);
        } catch (err) {
            res.status(401).send('Cannot get roles');
        }
    },
    // GET /call/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const role = await prisma.dbo_call.findUnique({
                where: {
                    id: id,
                    company: req.company
                }
            });
            res.send(call);
        } catch (err) {
            res.status(401).send('Cannot get call');
        }
    },
    // POST /call
    create: async (req, res) => {
        try {
            const call = await prisma.dbo_call.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(call);
        } catch (err) {
            res.status(401).send('Cannot create call');
        }
    },
    // PUT /calls/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const call = await prisma.dbo_call.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(call);
        } catch (err) {
            res.status(401).send('Cannot update call');
        }
    },
    // DELETE /calls/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const call = await prisma.dbo_call.delete({
                where: {
                    id
                }
            });
            res.send(call);
        } catch (err) {
            res.status(401).send('Cannot delete call');
        }
    }
};

export default callController;