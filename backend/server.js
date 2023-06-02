import express from 'express'
import cors from 'cors'
import mysql from 'mysql'


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    let dbOptions = {
        host: "localhost",
        user: "root",
        password: "",
        database: "z-table"
    };
    const credentials = {
        host: req.body.host,
        user: req.body.username,
        password: req.body.password,
        database: req.body.database
    }
    // console.log('HEYY');
    console.log(req.body);
    // console.log(dbOptions);

    var connection = mysql.createConnection(req.body.config);
    console.log("Connecting to database... ");
    connection.connect((error) => {
        if(!error){
            console.log('Successfuly logged into Database!')
            res.send({
                access: true,
                msg: "Successfuly logged into Database!"
            })
        }else{
            console.log("Credentials incorrect. Access denied!");
            console.error(error);
            res.send({
                access: false,
                msg: "Credentials incorrect. Access denied!"
            })
        }
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong...",
    });
});


app.listen(PORT, error => {
    if (error)
        console.log("Error in launching server!");
    else
        console.log(`Server is listening on http://localhost:${PORT}`);
})