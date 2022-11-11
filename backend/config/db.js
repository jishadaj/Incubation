const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://jishad:123qwe@cluster0.humiei0.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
   
}).then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log('db not connected');
})