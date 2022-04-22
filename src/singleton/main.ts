import { Database } from './db/database';

const db1 = Database.getInstance();
const db2 = Database.getInstance();

if (db1 === db2) {
  console.log('Padrão Singleton FUNCIONOU!!');
} else {
  console.log('Padrão Singleton NÃO FUNCIONOU');
}
