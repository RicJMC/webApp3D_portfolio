const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { 
  res.sendFile(__dirname); 
}); 
 
app.get('/sobre', (req, res) => { 
  res.send('Página sobre'); 
}); 


app.listen(port, () => {
  console.log(`Servidor a funcionar ${port}`);
});
