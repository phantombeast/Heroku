const express=require('express')();

const PORT=process.env.PORT || 9876;


express.get('/', (req, res)=>{

    res.send('Hello wORLD');
});

express.listen(PORT, ()=>{
    console.log('Server Started at ', PORT);
});