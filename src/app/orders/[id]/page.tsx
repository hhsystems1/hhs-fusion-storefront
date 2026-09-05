import { notFound } from 'next/navigation';
import { commerceDb } from '@/lib/commerce/db';
import { Package, Clock, Truck, CheckCircle2, Calendar, CreditCard } from 'lucide-react';

export default async function OrderStatusPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: hash } = params;
  const order = await commerceDb.orders.getByHash(hash);

  if (!order) {
    notFound();
  }

  const statusSteps = [
    {
      id: 'pending',
      label: 'Payment Pending',
      icon: Clock,
      description: 'Waiting for payment confirmation.',
    },
    {
      id: 'paid',
      label: 'Payment Received',
      icon: CreditCard,
      description: 'Payment confirmed. Order is being prepared.',
    },
    {
      id: 'processing',
      label: 'Processing',
      icon: Package,
      description: 'Your order is being packed and prepared for shipment.',
    },
    {
      id: 'shipped',
      label: 'Shipped',
      icon: Truck,
      description: 'Your order is on its way to you.',
    },
    {
      id: 'delivered',
      label: 'Delivered',
      icon: CheckCircle2,
      description: 'Order has been delivered.',
    },
  ];

  const currentStatus = order.status || 'pending';
  const currentStatusIndex = statusSteps.findIndex((s) => s.id === currentStatus);
  const safeIndex = currentStatusIndex === -1 ? 0 : currentStatusIndex;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-hhs-slate-900 mb-2">Order Tracking</h1>
        <p className="text-hhs-slate-600">Track the progress of your order in real-time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Order Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-hhs-slate-100">
            <h2 className="text-sm font-semibold text-hhs-slate-400 uppercase tracking-wider mb-4">Order Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-hhs-slate-500 text-sm">Order ID</span>
                <span className="text-hhs-slate-900 font-medium text-sm">{order.id.slice(0, 8).toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-hhs-slate-500 text-sm">Date</span>
                <span className="text-hhs-slate-900 font-medium text-sm">
                  {new Date(order.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-hhs-slate-500 text-sm">Total</span>
                <span className="text-hhs-slate-900 font-bold text-sm">
                  ${parseFloat(order.total_amount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-hhs-blue/5 p-6 rounded-3xl border border-hhs-blue/10">
            <h3 className="text-hhs-blue font-semibold mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Estimated Delivery
            </h3>
            <p className="text-sm text-hhs-slate-600">
              Depending on your location, delivery usually takes 3-7 business days.
            </p>
          </div>
        </div>

        {/* Right: Status & Items */}
        <div className="lg:col-span-2 space-y-8">
          {/* Status Timeline */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-hhs-slate-100">
            <h2 className="text-lg font-bold text-hhs-slate-900 mb-8">Order Status</h2>
            <div className="relative">
              {/* Line background */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-hhs-slate-100" />
              <div 
                className="absolute top-5 left-0 h-0.5 bg-hhs-blue transition-all duration-500" 
                style={{ width: `${(safeIndex / (statusSteps.length - 1)) * 100}%` }} 
              />

              <div className="relative space-y-12">
                {statusSteps.map((step, index) => {
                  const isCompleted = index <= safeIndex;
                  const isCurrent = index === safeIndex;
                  const Icon = step.icon;

                  return (
                    <div key={step.id} className="flex items-start gap-6 relative">
                      <div className={`
                        relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500
                        ${isCompleted ? 'bg-hhs-blue text-white' : 'bg-white border-2 border-hhs-slate-200 text-hhs-slate-400'}
                        ${isCurrent ? 'ring-4 ring-hhs-blue/20 scale-110' : ''}
                      `}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold transition-colors duration-500 ${isCompleted ? 'text-hhs-slate-900' : 'text-hhs-slate-400'}`}>
                          {step.label}
                        </p>
                        <p className="text-sm text-hhs-slate-500">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-hhs-slate-100">
            <h2 className="text-lg font-bold text-hhs-slate-900 mb-6">Order Summary</h2>
            <div className="divide-y divide-hhs-slate-100">
              {order.order_items?.map((item: any) => (
                <div key={item.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {item.products?.image_url && (
                      <img 
                        src={item.products.image_url} 
                        alt={item.products.name} 
                        className="w-12 h-12 rounded-lg object-cover bg-hhs-slate-50" 
                      />
                    )}
                    <div>
                      <p className="font-medium text-hhs-slate-900">{item.products?.name || 'Unknown Product'}</p>
                      <p className="text-sm text-hhs-slate-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-hhs-slate-900">
                    ${(item.unit_price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-hhs-slate-100 flex justify-between items-center">
              <span className="text-lg font-bold text-hhs-slate-900">Total</span>
              <span className="text-2xl font-bold text-hhs-blue">
                ${parseFloat(order.total_amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
