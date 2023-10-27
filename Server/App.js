import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send({ message: "Server Running" });
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send({ name: req.body.name });
})

app.listen(PORT, () => console.log("Server Running on localhost:5000"));