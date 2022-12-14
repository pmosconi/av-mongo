import { MongoClient, Db } from 'mongodb';

const poolSize = process.env.MONGO_POOL_SIZE ? parseInt(process.env.MONGO_POOL_SIZE) : 5;

class MongoDbConnection {
  private db: Db | undefined;

  async mongoConnect(): Promise<Db> {
    try {
      const client = new MongoClient(process.env.MONGO_URL!, {
        maxPoolSize: poolSize,
        ignoreUndefined: true
      });
      await client.connect();
      const db = client.db();
      this.db = db;
      return db;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getDb(): Db | Promise<Db> {
    return this.db ? this.db : this.mongoConnect();
  }
}

const mongo = new MongoDbConnection();
export { mongo };
