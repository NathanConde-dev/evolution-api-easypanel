const { exec } = require("child_process");

function installPostgres() {
  return new Promise((resolve, reject) => {
    console.log("Instalando PostgreSQL...");

    // Comando para instalar PostgreSQL
    exec(
      "apt-get update && apt-get install -y postgresql postgresql-contrib",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao instalar PostgreSQL: ${stderr}`);
          reject(error);
          return;
        }
        console.log("PostgreSQL instalado com sucesso.");
        resolve(stdout);
      }
    );
  });
}

module.exports = installPostgres;
