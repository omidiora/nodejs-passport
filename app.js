const express=require('express');
const expressLayout=require('express-ejs-layouts');



const app=express();

// Ejs
app.use(expressLayout);
app.set('view engine' , 'ejs');

app.use('/' , require('./routes/index'))
app.use('/users' , require('./routes/users'))
app.use(express.static('public'));

const port=process.env.PORT || 7000;


app.listen(port , console.log(`Server started on port http://localhost:${port}`));