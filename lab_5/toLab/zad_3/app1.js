// No use of any template system
var express = require('express'),
    logger = require('morgan');
const {getHtmlResponse,getOp} = require('./script');
var app = express();
var x = 1;
var y = 2;

const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
    operation: {
        type: String,
        required: true,
    },
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    }
});

const number = mongoose.model("test", numberSchema)
app.use(express.json());


// Determining the contents of the middleware stack
app.use(logger('dev'));                         // Place an HTTP request recorder on the stack — each request will be logged in the console in 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// Route definitions
app.get('/', function (req, res) {     // The first route
    res.send(`<h1>${x} + ${y} = ${x + y}</h1>`); // Send a response to the browser
});

app.get('/json/:name', (req, res) => {
    const json = require(`./json/${req.params.name}`);
    module.exports.test.json1 = json;
    res.send(getHtmlResponse(json));
})

app.get('/calculate/:op/:x/:y',async (req, res) => {
    // const { op, x, y } = req.params;
    // var eq=new number({ operation: "-", x: Number(x), y: Number(y) })
    // eq.save()
    // if(op=="\'+\'"){
    //     res.send(`<h1>${x} + ${y} = ${Number(x)+Number(y)}</h1>`);
    // }
    // else if(op=="\'-\'"){
    //     res.send(`<h1>${x} - ${y} = ${Number(x)-Number(y)}</h1>`);
    // }
    // else if(op=="\'*\'"){
    //     res.send(`<h1>${x} * ${y} = ${Number(x)*Number(y)}</h1>`);
    // }
    // else if(op=="\'/\'"){
    //     res.send(`<h1>${x} / ${y} = ${Number(x)/Number(y)}</h1>`);
    // }
    const { op, x, y } = req.params;
    res.send(`<h1>${x} ${op} ${y} = ${eval(op, Number(x), Number(y))}</h1>`);
    var eq=new number({ operation: op, x: Number(x), y: Number(y) })
    eq.save()
})

app.get("/results", async (req, res) => {
    const allDogs = await number.find();
    return res.status(200).send(getHtmlResponse(allDogs));
});

module.exports.test = {x1: x, y1: y};

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://admin:admin@cluster0.k51pv.mongodb.net/db?retryWrites=true&w=majority"
        );
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();