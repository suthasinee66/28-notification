const express = require('express');
const app = express();
app.use(express.json());

app.post('/notify/email', (req, res) => {
    res.json({ sent: true, method: 'email' });
});

app.post('/notify/sms', (req, res) => {
    res.json({ sent: true, method: 'sms' });
});

app.post('/notify/push', (req, res) => {
    res.json({ sent: true, method: 'push' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
