import UserManagementDetailView from "@/view/user-management-detail";

export default async function UserManagementDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <UserManagementDetailView slug={slug} />;
}
