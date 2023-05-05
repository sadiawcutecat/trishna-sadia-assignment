const express = require('express');

const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
const chefData = require('./Data/chef.json');
// const RecipeDetails = require('./Data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server running')
  });

  app.get('/chefData',(req, res)=>{
    res.send(chefData);
    // console.log(chefData);
  })

  // app.get('/RecipeDetails',(req, res)=>{
  //   res.send(RecipeDetails);
  // })

 app.get('/chefData/:id',(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedRecipe = chefData?.filter(n =>{n.id ===id} );
   res.send(selectedRecipe);
  })

  app.listen(port,()=>{
    console.log(`server api is running on port :${port}`);
  })