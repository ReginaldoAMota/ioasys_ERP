import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const companyController = {
    // GET /company
    getAll: async (req, res) => {
        try {
            const company = await prisma.dbo_companies.findMany();
            res.send(company);
        } catch (err) {
            res.status(401).send('Cannot get company');
        }
    },
    // GET /company/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const company = await prisma.dbo_companies.findUnique({
                where: {
                    id: id
                }
            });
            res.send(company);
        } catch (err) {
            res.status(401).send('Cannot get company');
        }
    },
    // POST /company
    create: async (req, res) => {
        try {
            const company = await prisma.dbo_companies.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(company);
        } catch (err) {
            res.status(401).send('Cannot create company');
        }
    },
    // PUT /company/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const company = await prisma.dbo_companies.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(company);
        } catch (err) {
            res.status(401).send('Cannot update company');
        }
    },
    // DELETE /company/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const company = await prisma.dbo_companies.delete({
                where: {
                    id
                }
            });
            res.send(company);
        } catch (err) {
            res.status(401).send('Cannot delete company');
        }
    }
};

export default companyController;