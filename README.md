## Pesquisa Veículos

Projeto para listar dados de carros, de acordo com o termo informado.

## Tecnologias/Ferramentas utilizadas
- PHP 8
- Composer
- MySQL 8
- Laravel 8
- Node JS
- GIT

## Instruções
Clonar o projeto:
```sh
git clone https://github.com/helder1983/carros.git
```
Executar comando para pacotes PHP:
```sh
composer install
```

Renomear arquivo .env.example para .env por meio do comando:
```sh
cp .env.example .env
```

Alterar .env, informando banco carros, e executar comando no MySql:
```sql
CREATE DATABASE carros;
```

Para a criação de tabelas, executar:
```sh
php artisan migrate
```

Para os registros iniciais das tabelas, executar:
```sh
php artisan db:seed
```

Execute o comando:
```sh
php artisan key:generate
```

Execute o comando para os pacotes javascript:
```sh
npm install
```

Para subir o servidor local, executar:
```sh
php artisan serve
```

Por um navegador web, acessar `http://localhost:8000`
