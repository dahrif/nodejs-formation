var fs = require('fs');

fs.unlink('fichiers crées/testDelete.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});