import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-2xl shadow flex gap-4"
          >
            <img
              src={order.image}
              className="w-24 h-24 object-cover rounded-xl"
            />

            <div>
              <h2 className="text-xl font-bold">{order.productName}</h2>

              <p>Seller: {order.seller}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total: ৳{order.totalPrice}</p>
              <p className="text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}