#!/bin/sh

# Espera pelo PostgreSQL
echo "Aguardando pelo PostgreSQL em $DATABASE_HOST:$DATABASE_PORT..."
until nc -z $DATABASE_HOST $DATABASE_PORT; do
  echo "PostgreSQL ainda não está pronto..."
  sleep 2
done
echo "PostgreSQL está pronto!"

# Espera pelo Redis
echo "Aguardando pelo Redis em localhost:6379..."
until nc -z localhost 6379; do
  echo "Redis ainda não está pronto..."
  sleep 2
done
echo "Redis está pronto!"

exec "$@"
