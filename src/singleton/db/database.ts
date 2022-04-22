export class Database {
  private static instanceds: Database | null = null;

  private constructor() {}

  public static getInstance(): Database {
    if (Database.instanceds === null) {
      Database.instanceds = new Database();
    }

    return Database.instanceds;
  }
}
