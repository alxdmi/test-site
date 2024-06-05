const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main/index.html'));
});

app.get('/submit', function(req, res) {
  res.sendFile(path.join(__dirname+'/submit/index.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname+'/contact/index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
}); 