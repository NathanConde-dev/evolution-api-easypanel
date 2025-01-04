const installPostgres = require("./installPostgres");
const installRedis = require("./installRedis");
const installEvolutionAPI = require("./installEvolutionAPI");

(async () => {
  try {
    console.log("Iniciando a configuração da aplicação...");

    // Instalar PostgreSQL
    await installPostgres();

    // Instalar Redis
    await installRedis();

    // Instalar Evolution API
    await installEvolutionAPI();

    console.log("Configuração concluída com sucesso!");
  } catch (error) {
    console.error("Erro durante a configuração:", error);
  }
})();
