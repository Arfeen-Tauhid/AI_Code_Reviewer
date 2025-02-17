require('dotenv').config();
const app = require('./src/app');



app.listen(process.env.PORT||8000,()=>{
    console.log("Server running on Port 3000")
})