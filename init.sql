-- Criação de tabelas
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados iniciais
INSERT INTO users (username, password)
VALUES
('admin', crypt('admin_password', gen_salt('bf')))
ON CONFLICT (username) DO NOTHING;
