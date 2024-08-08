import { ModuleConnectionConfig } from "#common/database/database.type";
import { DefaultDBConfig } from "#common/database/database.constant";
import { ConnectionConfig } from "@adonisjs/lucid/types/database";

const departmentsConfig: ModuleConnectionConfig = {
  connectionName: 'departments',
  connectionConfig: {
    ...DefaultDBConfig,
    migrations: {
      naturalSort: true,
      paths: ['app/modules/department/database/migrations'],
    },
  } as ConnectionConfig,
};

export default departmentsConfig;
