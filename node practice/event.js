var fs = require('fs');
var rs = fs.createReadStream('./mynewfile1.txt');
rs.on('open', function() {
    console.log('the file is open');
});