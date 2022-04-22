import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const accessController = {
    // GET /access
    getAll: async (req, res) => {
        try {
            const accesses = await prisma.dbo_access_control.findMany();
            res.send(accesses);
        } catch (err) {
            res.status(401).send('Cannot get accesses');
        }
    },
    // GET /access/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const access = await prisma.dbo_access_control.findUnique({
                where: {
                    id: id
                }
            });
            res.send(access);
        } catch (err) {
            res.status(401).send('Cannot get access');
        }
    },
    // POST /access
    create: async (req, res) => {
        try {
            const access = await prisma.dbo_access_control.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(access);
        } catch (err) {
            res.status(401).send('Cannot create access');
        }
    },
    // PUT /access/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const access = await prisma.dbo_access_control.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(access);
        } catch (err) {
            res.status(401).send('Cannot update access');
        }
    },
    // DELETE /access/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const access = await prisma.dbo_access_control.delete({
                where: {
                    id
                }
            });
            res.send(access);
        } catch (err) {
            res.status(401).send('Cannot delete access');
        }
    }
};

export default accessController;