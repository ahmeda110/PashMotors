const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.set('view engine', 'ejs'); 

app.use(express.json({limit: '50mb'}));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
