require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_LOCAL_ENDPOINT).then(()=>console.log("connect to mongoDB")).catch(()=> console.log("false connect"));





const PORT = process.env.PORT || 4001;
app.listen(PORT, console.log(`welcome to the party on ${PORT}`));
