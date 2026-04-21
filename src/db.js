import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'interview_ai',
    password: 'welcome',
    port: 5432,
});

export default pool;