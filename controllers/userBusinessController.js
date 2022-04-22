import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()
import crypto from 'crypto'


const userBusinessController = {
    // GET /users/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await prisma.dbo_user_business.findUnique({
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
            const user = await prisma.dbo_user_business.create({
                data: req.body

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
            const user = await prisma.dbo_user_business.update({
                where: {
                    id
                },
                data: req.body
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
            const user = await prisma.dbo_user_business.delete({
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
export default userBusinessController;