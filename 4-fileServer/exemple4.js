var fs = require('fs');

fs.writeFile('fichiers crées/mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// cette fonction permet de créer des fichiers dans le dossier fichier... en utilisant la methode writeFile