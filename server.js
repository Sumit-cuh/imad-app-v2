var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' : {
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
},
    'article-two' : {
        title:'Article Two | Sumit khichi' ,
  heading:'Article Second',
  date: ' Sep 5, 2016',
  content:`
        <p>
        This is the content for my Second page of web app
        </p>
        <p>
        Welcome to  my new web app page. How are you feeling today?
        </p>
    `},
    'article-three' : {
     title:'Article Three | Sumit khichi' ,
  heading:'Article Three',
  date: ' Sep 5, 2016',
  content:`
        <p>
        This is the content for my Third page of web app
        </p>
        <p>
        Welcome to  my new web app page. How are you feeling today?
        </p>   
    
`    }
    
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate= `
        <!DOCTYPE html>
        <head>
            <title>${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
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

app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //article[articleName] == {}conten object for article one
    var articleName = req.params.articleName;//help in extracting the srticle name
    
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
