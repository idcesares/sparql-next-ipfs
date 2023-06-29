import { QueryEngine } from '@comunica/query-sparql';
import arrayifyStream from 'arrayify-stream';

const myEngine = new QueryEngine();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await myEngine.queryBindings(req.body.query, {
      sources: ['https://fragments.dbpedia.org/2015/en'],
    });
    const bindings = await arrayifyStream(result);
    res.json(bindings.map(binding => {
      let obj = {};
      binding.forEach((value, key) => {
        obj[key] = value.value;
      });
      return obj;
    }));
  } else {
    res.status(405).send('Method Not Allowed');
  }
}