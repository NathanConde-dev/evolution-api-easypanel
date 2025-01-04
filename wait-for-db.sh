#!/bin/sh
# Script para aguardar o banco de dados ficar disponível

echo "Verificando conexão com o banco de dados em $DATABASE_HOST:$DATABASE_PORT..."

# Loop para verificar a disponibilidade do banco de dados
until nc -z $DATABASE_HOST $DATABASE_PORT; do
  echo "Esperando pelo banco de dados..."
  sleep 2
done

echo "Banco de dados disponível!"
exec "$@"
