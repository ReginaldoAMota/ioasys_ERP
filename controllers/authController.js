import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import pkg from 'jsonwebtoken';
const { sign } = pkg;

import bcryptjs from 'bcryptjs';
const { compare } = bcryptjs;

const authController = {
    // POST /auth/login
    login: async (req, res) => {

        const { email, password } = req.body;
        const user = await prisma.dbo_user.findFirst({
            where: {
                email,
                password
            }
        });


        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
        } else {
            const passwordMatched = await compare(password, user.password)
            if (user.email !== email || passwordMatched) {
                res.status(401).send({
                    message: 'Invalid credentials'
                })
            }
        }
        const token = sign({
            "company": user.company_id,
            "access": user.access_control_id,
        }, process.env.JWTSECRET);
        res.send({
            token
        });
    }
};


export default authController;