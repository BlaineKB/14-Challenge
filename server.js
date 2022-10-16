const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.listen(PORT, async () => {
  console.log(`App is listening on port ${PORT}.`);
  try {
    await sequelize.sync({ force: false })
    console.log('You are now connected to the db.')
  } catch(err){
    console.log(err)
  }
});