import { getAll } from "@/features/user/api/get.user";
import { User } from "@/features/user/type";
import Link from "next/link";

async function fetchUsers() {
  try {
    const data = await getAll();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export default async function UserManagementView() {
  const users = await fetchUsers();

  return (
    <div className="flex flex-col justify-center items-center my-10">
      {users.length > 0 &&
        users.map((user: User, idx: number) => (
          <Link key={idx} href={`/user-management/${user.email}`}>
            <div>{user.email}</div>
          </Link>
        ))}
    </div>
  );
}
