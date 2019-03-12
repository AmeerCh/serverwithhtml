const express = require('express');
const fs = require('fs');
const app = express();
app.get('/page/:id', function (req, res) {
    var option = req.params.id;
    console.log(option);
    //res.writeHead(200,{'Content-Type':'text/html'});
    if(option==1){
        console.log("in condition");
        var page = fs.createReadStream(__dirname + '/hen.html', 'utf8');
    
    }
    if(option==2){
        var page = fs.createReadStream(__dirname + '/hen1.html', 'utf8');
    }
    page.pipe(res);
})
app.listen(3000, () => {
    console.log('server started');
});