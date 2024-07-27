import { UserButton } from "@clerk/nextjs";

function DashboardPage() {
  return (
    <div className="">
      <p className="">Dashbaord page (Protected)</p>
      <UserButton />
    </div>
  );
}

export default DashboardPage;
