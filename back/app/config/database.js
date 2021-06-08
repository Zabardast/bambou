module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'bambou_db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bambou_db'),
        username: env('DATABASE_USERNAME', 'user_bambou'),
        password: env('DATABASE_PASSWORD', 'ChemiseVachezoumbadoulitonobodynofly'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
