import React from 'react';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { name: 'Total Revenue', value: '$0.00', change: '+0%', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Total Orders', value: '0', change: '+0%', icon: ShoppingBag, color: 'text-blue-600' },
    { name: 'Active Customers', value: '0', change: '+0%', icon: Users, color: 'text-purple-600' },
    { name: 'Active Products', value: '0', change: '+0%', icon: Package, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back to the HHS Storefront administration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                {stat.change} <ArrowUpRight size={12} className="ml-1" />
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-sm text-gray-600">New order received #{1000 + i}</p>
                </div>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Supabase Connection</span>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Healthy</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Stripe Webhooks</span>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
