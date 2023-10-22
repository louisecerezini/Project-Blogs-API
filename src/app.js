const express = require('express');
const { usersController, categoryController, blogPostController } = require('./controllers/index');
const verifyToken = require('./middlewares/tokenMiddleware');

// ...

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', (_request, response) => usersController.login(_request, response));

app.post('/user', (_request, response) => usersController.createUser(_request, response));

app.get('/user', verifyToken, (_request, response) => usersController.getAll(_request, response));

app.get('/user/:id', verifyToken, (_request, response) => 
usersController.getById(_request, response));

app.post('/categories', verifyToken, (_request, response) => 
categoryController.createCategory(_request, response));

app.get('/categories', verifyToken, (_request, response) => 
categoryController.getCategories(_request, response));

app.post('/post', verifyToken, (_request, response) => 
blogPostController.createBlogPost(_request, response));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
