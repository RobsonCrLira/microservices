import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (_, res) => res.json({ message: 'Running application' }));
app.listen(4000, () => console.log('Aplication is running'));
