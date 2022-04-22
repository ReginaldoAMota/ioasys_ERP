import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const roleController = {
    // GET /roles
    getAll: async (req, res) => {
        try {
            const roles = await prisma.dbo_role.findMany();
            res.send(roles);
        } catch (err) {
            res.status(401).send('Cannot get roles');
        }
    },
    // GET /roles/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const role = await prisma.dbo_role.findUnique({
                where: {
                    id: id
                }
            });
            res.send(role);
        } catch (err) {
            res.status(401).send('Cannot get role');
        }
    },
    // POST /roles
    create: async (req, res) => {
        try {
            const role = await prisma.dbo_role.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(role);
        } catch (err) {
            res.status(401).send('Cannot create role');
        }
    },
    // PUT /roles/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const role = await prisma.dbo_role.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(role);
        } catch (err) {
            res.status(401).send('Cannot update role');
        }
    },
    // DELETE /roles/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const role = await prisma.dbo_role.delete({
                where: {
                    id
                }
            });
            res.send(role);
        } catch (err) {
            res.status(401).send('Cannot delete role');
        }
    }
};

export default roleController;