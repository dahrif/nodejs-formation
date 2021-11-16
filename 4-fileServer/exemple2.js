var fs = require('fs');

fs.appendFile('fichiers crées/demo.html', '<h1>Hello content!</h1>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Cette fonction permet de créer des fichiers dans le dossier fichier... (demo.html) en utilisant la methode appendFile