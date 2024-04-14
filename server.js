const express = require("express");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const app = express();
app.use(express.json());
PORT=process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})

connectDb();
const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title : 'Library API',
            version : '1.0.0'
        }
    },
    apis: ['server.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
// console.log(swaggerDocs);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));




/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Testing Swagger
 * /test:
 *   post:
 *     summary: Test
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/models/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
app.use("/test",(req,res)=>{
    res.json({ message:"Swagger UI" })
});



app.use("/api/parts",require("./routes/partRoutes.js"));
app.use("/api/warehouse", require("./routes/warehouseRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));