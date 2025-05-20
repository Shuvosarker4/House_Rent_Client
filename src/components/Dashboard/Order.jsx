import { useState } from "react";
import { Search } from "lucide-react";

const Order = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "#ORD-7245",
      customer: "John Smith",
      status: "Completed",
      date: "Mar 8, 2025",
      amount: "$125.00",
    },
    {
      id: "#ORD-7244",
      customer: "Sarah Johnson",
      status: "Processing",
      date: "Mar 7, 2025",
      amount: "$89.99",
    },
    {
      id: "#ORD-7243",
      customer: "Michael Brown",
      status: "Shipped",
      date: "Mar 7, 2025",
      amount: "$245.50",
    },
    {
      id: "#ORD-7242",
      customer: "Emily Davis",
      status: "Completed",
      date: "Mar 6, 2025",
      amount: "$112.75",
    },
  ];

  const getStatusBadge = (status) => {
    const base =
      "badge px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300";
    switch (status) {
      case "Completed":
        return `${base} bg-green-100 text-green-600`;
      case "Processing":
        return `${base} bg-yellow-100 text-yellow-700`;
      case "Shipped":
        return `${base} bg-blue-100 text-blue-600`;
      default:
        return base;
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg sm:text-xl font-semibold text-[#091E22]">
          Recent Orders
        </h3>

        {/* Search Bar */}
        <div className="my-4 flex items-center border rounded-lg px-3 py-2 w-full max-w-md bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by customer or order ID"
            className="ml-2 w-full outline-none focus:ring-2 focus:ring-[#fd390e] rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="text-sm text-white bg-[#fd390e] shadow-md">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, idx) => (
                  <tr
                    key={idx}
                    className={`cursor-pointer transition-colors duration-300 ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#fff2f0]"
                    } hover:bg-[#fd390e]/10`}
                  >
                    <td className="font-semibold text-[#fd390e] py-2 px-4">
                      {order.id}
                    </td>
                    <td className="py-2 px-4">{order.customer}</td>
                    <td className="py-2 px-4">
                      <span className={getStatusBadge(order.status)}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{order.date}</td>
                    <td className="font-semibold py-2 px-4">{order.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
