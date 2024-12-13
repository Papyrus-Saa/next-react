import { Sidebar } from "@/components/Sidebar";






export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-gray-600 selection:text-white">
      <div className="flex">
       <Sidebar/>
        <div className="w-full text-slate-800">
        {children}
        </div>
      </div>
    </div>
  );
}
