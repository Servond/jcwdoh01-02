import { Pool } from "pg";

const pool = new Pool({
  user: "postgres.ckjclgzpvvpnyxynvgyo",
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  password: "!Admin123;",
  database: "postgres",
  port: 6543,
});

export default pool;
