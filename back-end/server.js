const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'neelismail',
        password: '',
        database: 'yourspace'
    }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file');

app.post('/post', (req, res) => {
    upload(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        
        knex.insert({user_id: 1, img_path: req.file.originalname})
        .into("posts")
        .returning("*")
        .then(rows => {
            console.log(rows[0]);
        })
        .catch(err => console.log(err));

        console.log("File successfully uploaded");
        return res.status(200).send(req.file);
    })
})

app.get('/feed:id', (req, res) => {
    console.log(req)
    
    knex('posts').where({
        'user_id': req.params.id
    })
    .select('img_path')
    .then(paths => {
        console.log(paths);
        paths.map(path => {
            return 'public/uploads/' + path;
        });
        
        for (let i = 0; i < paths.length; ++i) {
            express.static(__dirname, paths[i])
        }
    })
    .catch(err => {
        console.log(err);
    });
    
    return res.status(200).send("Images retrieved");
})

app.listen(5000, () => console.log(`Server listening on Port 5000`));