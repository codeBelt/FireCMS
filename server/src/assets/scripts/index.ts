import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as firebase from 'firebase';

// https://www.smashingmagazine.com/2016/08/getting-started-koa-2-async-functions/
// http://blog.stevensanderson.com/2013/12/21/experiments-with-koa-and-javascript-generators/
const router = new Router();
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

router.get('/', async (ctx, next) => {
    firebase.initializeApp({
        apiKey: 'AIzaSyDqBfvsMGjfiTXNHeG7RmcOl-AcyHM2AZY',
        databaseURL: 'https://firecms-e950e.firebaseio.com'
    });

    const firebaseRef = firebase.database().ref();
    const data = firebaseRef.child('cms/single/0/title');
    const results = await data.once('value');

    ctx.body = results.val();
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
