# Usando a imagem base da Evolution API
FROM atendai/evolution-api:v2.1.1

# Instalar dependências adicionais usando apk (para Alpine Linux)
RUN apk add --no-cache postgresql-client

# Definindo as variáveis de ambiente
ENV DATABASE_ENABLED=true \
    DATABASE_PROVIDER=postgresql \
    DATABASE_HOST=localhost \
    DATABASE_PORT=5432 \
    DATABASE_USERNAME=admin \
    DATABASE_PASSWORD=admin_password \
    DATABASE_NAME=evolution_db \
    AUTHENTICATION_API_KEY=minha-chave-secreta \
    CACHE_REDIS_ENABLED=true \
    CACHE_REDIS_URI=redis://localhost:6379 \
    CACHE_REDIS_PREFIX_KEY=evolution

# Copiar scripts de inicialização
COPY init.sql /tmp/init.sql
COPY wait-for-services.sh /usr/local/bin/wait-for-services.sh
RUN chmod +x /usr/local/bin/wait-for-services.sh

# Expor porta da API
EXPOSE 8080

# Comando para inicializar serviços e iniciar a aplicação
CMD ["sh", "-c", "/usr/local/bin/wait-for-services.sh && psql -h localhost -U $DATABASE_USERNAME -d $DATABASE_NAME -f /tmp/init.sql && npm run start:prod"]
