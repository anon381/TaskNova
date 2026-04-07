import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://anon:%2312345678%23@cluster0.pl43sfi.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
client.connect()
  .then(() => { console.log('SUCCESS'); process.exit(0); })
  .catch(err => { console.error('FAIL:', err.message); process.exit(1); });
