const express = require('express');
const app = express();
const PORT = process.env.PORT || 1377;

app.get('/', (req, res) => {
    res.send('--hello!');
});

app.get('/track/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    res.send(`--traking order ID ${orderId}`);
});

app.use((req, res, next) => {
    res.status(404).send("--not found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('--something went wrong');
});

app.listen(PORT, () => {
    console.log(`started on http://localhost:${PORT}`);
});