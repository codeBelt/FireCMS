import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as firebase from 'firebase';
import * as fetch from 'node-fetch';
import * as fsp from 'fs-promise';
import * as glob from 'globby';
import * as nunjucks from 'nunjucks';
import * as del from 'del';

// https://firebase.googleblog.com/2016/01/keeping-our-promises-and-callbacks_76.html
// https://www.smashingmagazine.com/2016/08/getting-started-koa-2-async-functions/
// http://blog.stevensanderson.com/2013/12/21/experiments-with-koa-and-javascript-generators/

const router = new Router();
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

firebase.initializeApp({
  apiKey: 'AIzaSyDqBfvsMGjfiTXNHeG7RmcOl-AcyHM2AZY',
  databaseURL: 'https://firecms-e950e.firebaseio.com'
});

router.get('/', async (ctx, next) => {
  const firebaseRef = firebase.database().ref();
  const data = firebaseRef.child('cms/single/0/title');
  const results = await data.once('value');

  const api = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
  const list = await api.json();

  // https://mozilla.github.io/nunjucks/api.html
  // http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
  const htmlData = {
    title : 'My First Nunjucks Page',
    items : [
      { name : 'item #1' },
      { name : 'item #2' },
      { name : 'item #3' },
      { name : 'item #4' },
    ]
  };


  await fsp.writeFile('hello1.txt', 'hello world');
  const contents = await fsp.readFile('hello1.txt', {encoding:'utf8'});
  console.log('contentss', contents);

//http://justjs.com/posts/creating-reusable-express-modules-with-their-own-routes-views-and-static-assets

  const files = await glob(["templates/**/*.html"], { cwd: __dirname });
  const template = await fsp.readFile(files[1], 'utf-8');
  //var template = nunjucks.compile(content);
  //const rendered = template.render(htmlData);

  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('templates'));
  const rendered = env.render('parentExtend.html', htmlData);
  await fsp.mkdirs('output/some/path/foo');
  await fsp.writeFile('output/some/path/foo/ddd.html', rendered);

  ctx.body = results.val() + list[0];
});


// router.post('/posts', crearPost);

// async function obtenerPosts(ctx) {
// ctx.body = 'hello';
// try {
//     let con = await rethinkdb.connect(config);
//     let query = await rethinkdb.db('blog').table('posts').orderBy(rethinkdb.desc('fecha')).run(con);
//     let posts = await query.toArray();
//
//     ctx.body = posts;
// } catch (e) {
//     ctx.status = 500;
//     ctx.body = {
//         status: ctx.status,
//         error: e.message
//     }
// }
// }

app.listen(8080, <any>console.log('Waiting on 8080'));
