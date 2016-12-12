import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as firebase from 'firebase';
import * as fetch from 'node-fetch';
import * as fs from 'fs-promise';
import * as glob from 'globby';
import * as nunjucks from 'nunjucks';
import * as del from 'del';


// https://firebase.googleblog.com/2016/01/keeping-our-promises-and-callbacks_76.html
// https://www.smashingmagazine.com/2016/08/getting-started-koa-2-async-functions/
// http://blog.stevensanderson.com/2013/12/21/experiments-with-koa-and-javascript-generators/
// console.log(`fs`, fs);

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

    await fs.writeFile('filename.js', 'Hello');
    const asdf = await fs.readFile('filename.js', 'utf8');
console.log(`asdf`, asdf);




    // https://mozilla.github.io/nunjucks/api.html
//http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
    const htmlData = {
        title : 'My First Nunjucks Page',
        items : [
            { name : 'item #1' },
            { name : 'item #2' },
            { name : 'item #3' },
            { name : 'item #4' },
        ]
    };

    console.log("__dirname", __dirname);
    const paths = await glob(["*"], { cwd: __dirname });
    console.log("paths", paths);

//
//fsp.writeFile('hello1.txt', 'hello world')
//  .then(() => {
//    return fsp.readFile('hello1.txt', {encoding:'utf8'});
//  })
//  .then((contents) => {
//    console.log('contentss', contents);
//  });

//http://justjs.com/posts/creating-reusable-express-modules-with-their-own-routes-views-and-static-assets

//     console.log("__dirname", __dirname);
// // options is optional
//     glob("templates/**/*.html", {}, (er, files) => {
//         console.log("er, files", er, files);
//         // files is an array of filenames.
//         // If the `nonull` option is set, and nothing
//         // was found, then files is ["**/*.js"]
//         // er is an error object or null.
//
//         fs.readFile(files[1], 'utf-8', (err, content) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//
//
//             //var template = nunjucks.compile(content);
//             //const rendered = template.render(htmlData);
//
//             var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('templates'));
//             const rendered = env.render('parentExtend.html', htmlData);
//
//             console.log("rendered", rendered);
//
//             mkdirp('output/some/path/foo', (err) => {
//                 // path was created unless there was error
//                 fs.writeFile('output/some/path/foo/ddd.html', rendered, (err) => {
//                     if (err) {
//                         throw err;
//                     }
//                 });
//             });
//
//         });
//     });


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

// async function crearPost(ctx) {
// try {
//     let { titulo, texto } = ctx.request.body;
//     let con = await rethinkdb.connect(config);
//
//     let post = await rethinkdb.db('blog').table('posts').insert({
//         titulo: titulo,
//         fecha: rethinkdb.now(),
//         texto: texto
//     }).run(con);
//
//     ctx.body = {
//         post_id: post.generated_keys[0]
//     }
// } catch (e) {
//     ctx.status = 500;
//     ctx.body = {
//         status: ctx.status,
//         error: e.message
//     }
// }
// }

app.listen(8080, console.log('Waiting on 8080'));
