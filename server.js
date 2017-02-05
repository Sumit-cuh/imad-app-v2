var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
  title:'Article One | Sumit khichi' ,
  heading:'Article One',
  date: ' Sep 5, 2016',
  content:`
        <p>
        This is the content for my first page of web app
        </p>
        <p>
        Welcome to  my new web app page. How are you feeling today?
        </p>
  `
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmltemplate=
        `
        <!DOCTYPE html>
        <head>
            <title>${title}i</title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <style>
                
            </style>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>    
            <h3>
               ${heading}
            </h3>
            <div>
                ${content}
            </div>
            </div>
        </body>
    </html>`
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
