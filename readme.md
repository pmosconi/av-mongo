# @actvalue/av-mongo

![npm version](https://badgen.net/npm/v/@actvalue/av-mongo)
![npm tot downloads](https://badgen.net/npm/dt/@actvalue/av-mongo)
![npm license](https://badgen.net/npm/license/@actvalue/av-mongo)

Singleton client for MongoDb.

Create the connection once and share across code.

## Install

```bash
yarn add @actvalue/av-mongo
```

```bash
npm i @actvalue/av-mongo
```

## Usage:

```javascript
import { mongo } from '@actvalue/av-mongo';

// REQUIRED
process.env.MONGO_URL = 'mongo-url';

// OPTIONAL
process.env.MONGO_POOL_SIZE = 5; // default value

const db = await mongo.getDb();
const result = await db.collection('coll').find({}).toArray();
```
