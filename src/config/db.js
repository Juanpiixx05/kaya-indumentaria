import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kaya_indumentaria',
  password: '1234',
  port: 5432,
});

// Evento cuando se crea una nueva conexión
pool.on('connect', () => {
  console.log('Base de datos: Nueva conexión establecida');
});

// Evento cuando hay un error
pool.on('error', (err) => {
  console.error('Base de datos: Error inesperado:', err);
});

// Probar la conexión inmediatamente
pool.query('SELECT NOW()')
  .then(() => console.log('Base de datos: Conexión inicial exitosa'))
  .catch(err => console.error('Base de datos: Error en la conexión inicial:', err));

export default pool;
