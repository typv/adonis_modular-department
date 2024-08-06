import env from "#start/env";

const departmentsConfig = {
  connectionName: 'departments',
  connectionConfig: {
    client: 'pg',
    connection: {
      host: env.get('DB_HOST'),
      port: env.get('DB_PORT'),
      user: env.get('DB_USER'),
      password: env.get('DB_PASSWORD'),
      database: env.get('DB_DATABASE'),
    },
    migrations: {
      naturalSort: true,
      paths: ['app/modules/department/database/migrations'],
    },
  },
};

export default departmentsConfig;
