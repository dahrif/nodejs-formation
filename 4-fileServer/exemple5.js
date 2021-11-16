var fs = require('fs');

fs.appendFile('fichiers crées/mynewfile1.txt', ' Ajouter du contenu.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});