import app from './app.js'
const port = process.env.PORT || 3000;
 



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))

