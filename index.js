const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');




const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
require('./DBConnection/db')

const  GymRoutes = require('./Routes/gym');
const  MembershipRoutes = require('./Routes/memberShip');


app.use('/auth',GymRoutes)
app.use('/plans',MembershipRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on Port 5000")
})