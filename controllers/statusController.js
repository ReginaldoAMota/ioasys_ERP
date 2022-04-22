import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const statusController = {
    // GET /status
    getAll: async (req, res) => {
        try {
            const status = await prisma.dbo_status.findMany();
            res.send(status);
        } catch (err) {
            res.status(401).send('Cannot get status');
        }

    },
    // GET /status/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const status = await prisma.dbo_status.findUnique({
                where: {
                    id
                }
            });
            res.send(status);
        } catch (err) {
            res.status(401).send('Cannot get status');
        }
    },
    // POST /status
    create: async (req, res) => {
        try {
            const status = await prisma.dbo_status.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(status);
        } catch (err) {
            res.status(401).send('Cannot create status');
        }
    },
    // PUT /status/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const status = await prisma.dbo_status.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(status);
        } catch (err) {
            res.status(401).send('Cannot update status');
        }
    },
    // DELETE /status/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const status = await prisma.dbo_status.delete({
                where: {
                    id
                }
            });
            res.send(status);
        } catch (err) {
            res.status(401).send('Cannot delete status');
        }
    }
};

export default statusController;