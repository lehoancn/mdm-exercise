var { UserModel } = require('./user');

const express = require('express');
const jsonParser = require('body-parser');
const app = express();
var fs = require('fs');

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(jsonParser.json());
app.use(jsonParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/users', (req, res) => {
    //console.log('Call ws users');
    
    fs.readFile(__dirname + '/user.json', (err, data) => {
        if(err) throw err;
        res.send(JSON.parse(data));
    });
});

app.get('/user', (req, res) => {
    var userId = req.param('id');
    console.log(userId);

    res.send(userId);
});

app.get('/user/:id', (req, res) => {
    var userPath = __dirname + '/user.json';
    var content = fs.readFileSync(userPath,'utf8');
    console.log(content);

    var json = JSON.parse(content);
    var index = json.findIndex((item, i) => {
        return item.id == req.params.id;
    });

    if(index >= 0){
        res.send(json[index]);
    }else{
        res.send("404 Not found");
    }
});

app.get('/groups', (req, res) => {
    //console.log('Call ws groups');

    fs.readFile(__dirname + '/group.json', (err, data) => {
        if(err) throw err;
        res.send(JSON.parse(data));
    });
});

app.post('/api/users/add', (req, res) => {
    var userPath = __dirname + '/user.json';
    fs.readFile(userPath, function (err, data) {
        var json = JSON.parse(data);
        model = new UserModel(req.body.email, req.body.rolename);
        if(json.length > 0){
            model.id = json[json.length - 1].id + 1;
        }else{
            model.id = 1;
        }

        json.push(model);

        fs.writeFileSync(userPath, JSON.stringify(json));
        res.send(model);
    });
});

app.post('/api/user/delete', (req, res) => {
    console.log('Call user delete');
    var userPath = __dirname + '/user.json';

    var content = fs.readFileSync(userPath,'utf8');
    console.log(content);

    var json = JSON.parse(content);
    var index = json.findIndex((item, i) => {
        return item.id == req.body.id;
    });

    if(index >= 0){
        var user = json[index];
        json.splice(index, 1);
        fs.writeFileSync(userPath, JSON.stringify(json));
        res.send(user);
    }else{
        res.send('404 Not found');
    }

    // fs.writeFile(userPath, newData);
    // res.send('OK');
});

app.listen(3000, () => {
    console.log('Server is running...');
});