// require('dotenv').config();
const Express = require('express');
const mongoose = require("mongoose");
const cors = require('cors'); 
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

// import route
const userRouter = require('./Routes/user.route.js');
const adminRouter = require('./Routes/admin.route.js');

const app = Express();
const PORT = 5012;
//app.use(Express.json());

//connect DB
const uri = `${process.env.DB_NAME}://${process.env.DB_USERNAME}/${process.env.DB_COL}`;

const connectDB = async () => {
    try {
        await mongoose.connect( uri,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
        });
        console.log('Connect to database is success !')
    }
    catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}
// Start 
connectDB();

app.use(cookieParser());
app.use(Express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);


app.listen(PORT,() => {
    console.log(`Server started on PORT ${PORT}`)
} )


