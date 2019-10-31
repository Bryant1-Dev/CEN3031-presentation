const express = require("express");
const bodyParser = require("body-parser");
const mongooseSetup = require("./config/database");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const index = require("./routes/index");
const users = require("./routes/users");
//const cors = require("cors");
mongooseSetup.start(); //starts the database
//Passport Config
require("./config/passport")(passport);

const app = express();
app.set("trust proxy", true);

//Body Parser
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false })); //express 4 way of doing things
app.use(bodyParser.json()); //alows us to deal with form data and json data

//app.use(cors());

const PORT = process.env.PORT || 3001;
//console.log(mongooseSetup.connection);
//Express session middleware
app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    store: new MongoStore({ mongooseConnection: mongooseSetup.connection }),
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Globals
app.use((req, res, next) => {
  if (req.session) {
    res.locals.session = req.session;
  }
  next();
});

//Routes
app.use("/", index);
app.use("/users", users);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
