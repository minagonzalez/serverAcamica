const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')


app.get('/bandas', function(req, res){
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database: 'actividad'
    })

    connection.connect();

    connection.query('SELECT * from bandas ', function (err, rows, fields) {
        if (err) throw err;

        res.json(rows);
    });
    connection.end();
    
})

app.get('/bandas/:id', function(req, res){
    const bandaId = req.params.id;
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database: 'actividad'
    })

    connection.connect();

    connection.query('SELECT * from bandas WHERE id = ' + bandaId, function (err, rows, fields) {
        if (err) throw err;
        if (rows.length === 0) {
            res.status(404).json('No se encontró la banda') 
        } else {
         res.json(rows[0]);
        }

    });
    connection.end();
    
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
