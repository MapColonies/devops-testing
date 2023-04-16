const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
    response.sendStatus(200);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
