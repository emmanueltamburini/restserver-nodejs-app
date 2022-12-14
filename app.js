import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.get('/',(req, res) => {
  res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`);
});
