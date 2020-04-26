var PORT = process.env.PORT || 3000;
var server = require("./server");

server.listen(PORT, () => console.log('listening at 3000'));