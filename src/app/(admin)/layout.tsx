import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Package, 
  BarChart3,
  LogOut 
} from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Placeholder for Admin Auth Guard
  // In a real implementation, this would check the session and user role
  const isAdmin = true; 

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to view this page.</p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold tracking-tight">HHS Admin</h2>
          <p className="text-xs text-slate-400 uppercase mt-1">Management Console</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-red-900/20 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-gray-800">
            {/* Dynamic title could be handled here or in pages */}
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Administrator</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
