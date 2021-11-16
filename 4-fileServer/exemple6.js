var fs = require('fs');

fs.writeFile('fichiers crées/mynewfile2.txt', 'Changement de texte', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});