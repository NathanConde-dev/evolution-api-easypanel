const installPostgres = require("./installPostgres");
const installRedis = require("./installRedis");
const installEvolutionAPI = require("./installEvolutionAPI");
const crypto = require("crypto");
const fs = require("fs");

(async () => {
  try {
    console.log("Iniciando a configuração automática da aplicação...");

    // Variáveis de ambiente necessárias
    const envVariables = {
      DATABASE_HOST: "localhost",
      DATABASE_PORT: "5432",
      DATABASE_USERNAME: "admin",
      DATABASE_PASSWORD: crypto.randomBytes(8).toString("hex"), // Gera uma senha aleatória
      DATABASE_NAME: "evolution_db",
      CACHE_REDIS_URI: "redis://localhost:6379",
      AUTHENTICATION_API_KEY: crypto.randomBytes(16).toString("hex"), // Gera uma chave de autenticação
      DATABASE_ENABLED: "true",
      DATABASE_PROVIDER: "postgresql",
      CACHE_REDIS_ENABLED: "true",
      CACHE_REDIS_PREFIX_KEY: "evolution",
    };

    // Definir as variáveis de ambiente no processo
    Object.entries(envVariables).forEach(([key, value]) => {
      process.env[key] = value;
      console.log(`Configurado: ${key} = ${value}`);
    });

    // Persistir as variáveis em um arquivo .env
    const envContent = Object.entries(envVariables)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    fs.writeFileSync(".env", envContent);
    console.log("Variáveis salvas no arquivo .env");

    // Instalar PostgreSQL
    await installPostgres();

    // Instalar Redis
    await installRedis();

    // Instalar Evolution API
    await installEvolutionAPI();

    console.log("Configuração concluída com sucesso!");
    console.log("Variáveis configuradas:");
    console.table(envVariables);
  } catch (error) {
    console.error("Erro durante a configuração:", error);
  }
})();
