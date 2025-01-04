const { exec } = require("child_process");

function installEvolutionAPI() {
  return new Promise((resolve, reject) => {
    console.log("Instalando Evolution API...");

    // Comando para clonar e configurar Evolution API
    exec(
      "git clone https://github.com/atendai/evolution-api.git && cd evolution-api && npm install && npm run build",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao instalar Evolution API: ${stderr}`);
          reject(error);
          return;
        }
        console.log("Evolution API instalada com sucesso.");
        resolve(stdout);
      }
    );
  });
}

module.exports = installEvolutionAPI;
