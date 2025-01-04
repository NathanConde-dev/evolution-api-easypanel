const { exec } = require("child_process");

function installEvolutionAPI() {
  return new Promise((resolve, reject) => {
    console.log("Instalando Evolution API...");

    // Comando para clonar o seu repositório
    const repoUrl = "https://github.com/NathanConde-dev/evolution-api-conde.git";
    const command = `git clone ${repoUrl} && cd evolution-api-conde && npm install && npm run build`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao instalar Evolution API: ${stderr}`);
        reject(error);
        return;
      }
      console.log("Evolution API instalada com sucesso.");
      resolve(stdout);
    });
  });
}

module.exports = installEvolutionAPI;
