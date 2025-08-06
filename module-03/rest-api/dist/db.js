"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres.ckjclgzpvvpnyxynvgyo",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    password: "!Admin123;",
    database: "postgres",
    port: 6543,
});
exports.default = pool;
