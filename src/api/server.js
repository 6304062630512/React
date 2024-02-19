const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')

app.use(cors());
app.use(express.json())

const products = [
  {
    Equation : 'x^2+x',
    inputX0  : '6',  
    inputX  : '3',
    inputn  : '4'
  }
]

app.get('/products', (req, res) =>{
  res.status(200).json(products);
})

app.listen(PORT, () => console.log('Server is running...'))
