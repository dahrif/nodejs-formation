var fs = require('fs');

fs.open('fichiers crées/mynewfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// cette fonction permet de créer des fichiers dans le dossier fichier... en utilisant la methode open