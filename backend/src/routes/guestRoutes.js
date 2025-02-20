import express from 'express'
import prisma from '../config/db.js'

const router = express.Router()

router.get('/products', async (req, res)=>{
    try{
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error: "Error al obtener los productos"})

    }
})

export default router