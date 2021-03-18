import process from 'process';
import express from 'express';
import cors from 'cors';

const PORT = Number(process.env['PORT']) || 3091;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
	res.status(200).send('Pong');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});