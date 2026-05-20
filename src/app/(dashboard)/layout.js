import DashboardSidebar from "@/components/ui/Dashboard";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
