const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const {syncDB} = require('./models');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret:'secret-key',
    resave: false,
    saveUninitialized:true
}));
app.use(express.static('public'));

app.set('views', __dirname + '/views'); //  đúng đường dẫn tới thư mục views
//view engine
app.set('view engine','ejs');

//Routes
app.use('/', todoRoutes);

// Error Handling
app.use((req, res) => {
    res.status(404).render('error', { error: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: err.message });
});
// Sync DB and Start Server
syncDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});