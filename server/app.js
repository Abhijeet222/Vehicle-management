const express = require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

const vehicleRoutes = require('./routes/vehicleRoutes');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');


app.use('/api/auth',require('./routes/authRoutes.js'));
app.use('/api/emails', emailRoutes);
app.use('/api/vehicles', vehicleRoutes);

const PORT=process.env.PORT || 4000;
app.get('/',(req,res)=>{
  res.send('Hello World');  
});

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});