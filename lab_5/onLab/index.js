// No use of any template system
var express = require('express'),
    logger = require('morgan');
const {getHtmlResponse,getOp} = require('./script');
const formidable = require('formidable');
var app = express();

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  }
});

const item = mongoose.model("item", itemSchema)
const order = mongoose.model("order", orderSchema)
app.use(express.json());


app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(logger('dev'));

app.get('/addProduct', (req, res) => {
  res.render('formAddProduct');
});

app.post('/', (req, res) => {
  const form = formidable();
  form.parse(req, (err, body, files) => {
    if(!body.name || !body.price || !body.stock || body.price<0 || body.stock<0){
      res.render('addSuccess',{ records: 'Product has problems with adding' });
      return;
    }
    item.insertMany([body]).then(() => {
        res.render('addSuccess', {records: 'Product successfully added'})
      })
  });
});

app.get('/addTransaction', (req, res) => {
  res.render('formAddTransaction');
});

app.post('/transaction', (req, res) => {
  const form = formidable();
  form.parse(req, async (err, body, files) => {
    if (body.user && body.item && body.count && body.count > 0) {
      const currentItem = await item.findOne({name: body.item})
      if (currentItem && currentItem.stock >= body.count) {
        currentItem.stock -= body.count
        await item.findOneAndUpdate({name:currentItem.name}, currentItem)
        const users = await order.find({item: body.item})
        order.insertMany([body]).then(() => {
          res.render('addTransaction', {
            records: {
              text: 'Transaction successfully added',
              name: body.item,
              stock: currentItem.stock,
              price: currentItem.price,
              users:users.map(x=>x.user)
            }
          })
        })
        return;
      }
    }
    const object = {text: 'Transaction has problems with adding'}
    res.render('addTransaction', {records: object})
  });
});

app.get('/addTransaction', (req, res) => {
  res.render('formAddTransaction');
});

app.get('/products', async (req, res) => {
  let records = await item.find()
  res.render('products',{records});
});

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