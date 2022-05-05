import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (_, res) => res.json({ message: 'MS Create-User' }));
app.listen(4001, () => console.log('Application (MS Create-User) is running'));
