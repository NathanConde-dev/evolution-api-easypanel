const { exec } = require("child_process");

function installRedis() {
  return new Promise((resolve, reject) => {
    console.log("Instalando Redis...");

    // Comando para instalar Redis
    exec(
      "apt-get update && apt-get install -y redis-server",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao instalar Redis: ${stderr}`);
          reject(error);
          return;
        }
        console.log("Redis instalado com sucesso.");
        resolve(stdout);
      }
    );
  });
}

module.exports = installRedis;
