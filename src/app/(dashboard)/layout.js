import DashboardSidebar from "@/components/ui/Dashboard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      {
        session? <DashboardSidebar />:""
      }

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
