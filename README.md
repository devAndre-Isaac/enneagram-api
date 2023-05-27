### Project Execution Instructions

This repository contains a project that can be executed using the following steps:

### Configuring Environment Variables

Before running the project, ensure that the necessary environment variables are properly configured. You may need to create a .env file in the project root directory and define the required variables. Refer to the project documentation or the provided .env.example file for the specific variables and their values.

### Running with Docker Compose

To run the project using Docker Compose, execute the following command in the terminal:

```bash
docker-compose up
```

This command will start the necessary containers defined in the docker-compose.yml file. Make sure you have Docker and Docker Compose installed before running this command.

### Running in Development Mode

To run the project in development mode without Docker, execute the following command in the terminal:

```bash
npm run dev
```

This command will start the project using the configured development settings.

### Creating and Running Migrations

If you need to create and run migrations for the project, follow these steps:

### Create Migration

To create a migration, execute the following command in the terminal:

```bash
npm run typeorm migration:generate -d ./src/config/database/migrations/${NAME}
```

Replace `${NAME}` with the desired name for your migration. This command will generate a new migration file in the specified directory.

### Run Migrations

To run the migrations and apply any pending changes to the database, execute the following command in the terminal:

```bash
npm run typeorm migration:run
```

This command will execute all pending migrations and update the database schema accordingly.

Please note that these instructions assume you have Node.js and npm (Node Package Manager) installed on your system. If not, make sure to install them before proceeding with the above steps.

Make sure to also install the project dependencies by running npm install before executing any of the commands mentioned above.

Feel free to explore and customize the project further based on your requirements.
