var fs = require('fs');

fs.rename('fichiers crées/testRename.txt', 'fichiers crées/myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});