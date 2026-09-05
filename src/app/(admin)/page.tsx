import React from 'react';
import { commerceDb } from '@/lib/commerce/db';

export default async function AdminOverview() {
  const stats = await commerceDb.orders.getStats();
  const recentOrders = await commerceDb.orders.getRecent(5);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-hhs-slate-200 shadow-sm">
          <p className="text-sm font-medium text-hhs-slate-500 uppercase tracking-wider">Total Revenue</p>
          <p className="text-3xl font-bold text-hhs-slate-900 mt-2">
            ${stats.totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-hhs-slate-200 shadow-sm">
          <p className="text-sm font-medium text-hhs-slate-500 uppercase tracking-wider">Total Orders</p>
          <p className="text-3xl font-bold text-hhs-slate-900 mt-2">
            {stats.totalOrders}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-hhs-slate-200 shadow-sm">
          <p className="text-sm font-medium text-hhs-slate-500 uppercase tracking-wider">Avg Order Value</p>
          <p className="text-3xl font-bold text-hhs-slate-900 mt-2">
            ${stats.avgOrderValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="bg-white border border-hhs-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-hhs-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-hhs-slate-900">Recent Orders</h3>
          <a href="/admin/orders" className="text-sm text-hhs-blue hover:underline">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-hhs-slate-50 text-hhs-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hhs-slate-100">
              {recentOrders.map((order: any) => (
                <tr key={order.id} className="hover:bg-hhs-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">{order.id.slice(0, 8)}...</td>
                  <td className="px-6 py-4 font-semibold">${Number(order.total_amount).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-hhs-slate-500">
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
