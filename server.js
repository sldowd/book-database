const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3005;

//session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  //serve static files
app.use(express.static(path.join(__dirname, 'public')));
  //set up template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
  //session
app.use(session(sess));

//use routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT' + PORT));
})