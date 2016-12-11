import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
// import * as rethinkdb from 'rethinkdb';

const config = {
    host: 'localhost',
    port: 28015
};

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get('/', obtenerPosts);
// router.post('/posts', crearPost);

app.use(router.routes());

async function obtenerPosts(ctx) {
    ctx.body = 'hello';
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
}

async function crearPost(ctx) {
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
}

app.listen(3000, () => console.log('Esperando en puerto 3000'));
