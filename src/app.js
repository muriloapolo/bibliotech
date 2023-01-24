import express from 'express'
const app = express();



app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/public/index.html')
    
    // res.send('Funcionou')
});
// app.post();
// app.put();
// app.delete();







export default app