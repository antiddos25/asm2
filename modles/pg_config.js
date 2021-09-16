const Pool = require('pg').Pool;
const pg_conn = new Pool({
    user: 'qxnqgpilhivzuy',
    host: 'ec2-54-146-84-101.compute-1.amazonaws.com',
    database: 'd8s3u3ckd5l94b',
    password: '6fc488ad6303f7349087db970cf8d16397a774fffb9e6e6d8d0ca9f8d84127d8',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});
module.exports = pg_conn;