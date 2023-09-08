const bodyParser = require('body-parser');
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const port = 3000;
const app = express()

app.set('./views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.render('upload');
});
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(res.file);
  res.redirect('/');
});

app.listen(port, () =>{
    console.log('server is running on port: ', port);
})