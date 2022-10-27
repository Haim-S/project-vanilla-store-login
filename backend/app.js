const express = require("express");
const app = express();
const parserBody = require("body-parser");
const cors = require("cors");
const globalErrorHandler = require("./Middleware/globalErrorHandler");
const AppError = require("./utils/AppError");

// The department of importing routes
const manufacturerRoutes = require("./routes/manufacturerRoutes");
const ShoesRoutes = require("./routes/ShoesRoutes");
const userRoutes = require("./routes/userRoutes");

// midlllwers
app.use(cors());
app.use(parserBody.json());


app.use("/manufacturer", manufacturerRoutes);
app.use("/shoe", ShoesRoutes)
app.use("/user", userRoutes);

app.all("*", (req, res, next) => {
    next(new AppError("Page not found", 404));
});


app.use(globalErrorHandler);
module.exports = app;