import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()
import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const userController = {
    // GET /users
    getAll: async (req, res) => {
        try {
            const users = await prisma.dbo_user.findMany();
            res.send(users);
        } catch (err) {
            res.status(401).send('Cannot get users');
        }

    },
    // GET /users/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await prisma.dbo_user.findUnique({
                where: {
                    id
                }
            });
            res.send(user);
        } catch (err) {
            res.status(401).send('Cannot get user');
        }
    },
    // POST /users
    create: async (req, res) => {
        try {

            const user = await prisma.dbo_user.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    password: await hash(req.body.password, 10),
                    created_at: new Date(),
                    ...req.body,
                }
            });
            res.send(user);
        } catch (err) {
            res.status(401).send('Cannot create user');
        }
    },
    // PUT /users/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await prisma.dbo_user.update({
                where: {
                    id
                },
                data: {
                    ...req.body,
                    updated_at: new Date(),
                }
            });
            res.send(user);
        } catch (err) {
            res.status(401).send('Cannot update user');
        }
    },

    // DELETE /users/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await prisma.dbo_user.delete({
                where: {
                    id
                }
            });
            res.send(user);
        } catch (err) {
            res.status(401).send('Cannot delete user');
        }
    }
};

export default userController;