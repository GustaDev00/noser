const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

const output = fs.createWriteStream(path.join(__dirname, "out.zip"));
const archive = archiver("zip", {
  zlib: { level: 9 }, // Define o nível de compressão
});

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log("Arquivo zip foi criado com sucesso.");
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

// Adiciona todos os arquivos da pasta 'out' ao arquivo zip
archive.directory(path.join(__dirname, "out"), false);

archive.finalize();
