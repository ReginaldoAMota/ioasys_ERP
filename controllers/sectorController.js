import prismaPkg from '@prisma/client';
const { PrismaClient } = prismaPkg;
const prisma = new PrismaClient()

import crypto from 'crypto'
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;


const sectorController = {
    // GET /sectors
    getAll: async (req, res) => {
        try {
            const sectors = await prisma.dbo_sector.findMany();
            res.send(sectors);
        } catch (err) {
            res.status(401).send('Cannot get sectors');
        }
    },
    // GET /sectors/:id
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const sector = await prisma.dbo_sector.findUnique({
                where: {
                    id
                }
            });
            res.send(sector);
        } catch (err) {
            res.status(401).send('Cannot get sector');
        }
    },
    // POST /sectors
    create: async (req, res) => {
        try {
            const sector = await prisma.dbo_sector.create({
                data: {
                    id: crypto.randomBytes(16).toString('hex'),
                    ...req.body
                }
            });
            res.send(sector);
        } catch (err) {
            res.status(401).send('Cannot create sector');
        }
    },
    // PUT /sectors/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const sector = await prisma.dbo_sector.update({
                where: {
                    id
                },
                data: req.body
            });
            res.send(sector);
        } catch (err) {
            res.status(401).send('Cannot update sector');
        }
    },
    // DELETE /sectors/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const sector = await prisma.dbo_sector.delete({
                where: {
                    id
                }
            });
            res.send(sector);
        } catch (err) {
            res.status(401).send('Cannot delete sector');
        }
    }
};

export default sectorController;
