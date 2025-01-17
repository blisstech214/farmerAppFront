import React, { useState } from "react";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi"; // Import icons
import a from "../../assets/b.jpg";
import b from "../../assets/backB.jpg";
import c from "../../assets/backA.jpg";
import d from "../../assets/backC.jpg";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    image: a,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    image: b,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 234 567 892",
    image: c,
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "+1 234 567 893",
    image: d,
  },
];

function Customer() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Customer Management
      </h1>

      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </div>

      <div className="space-y-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="flex flex-wrap justify-between items-center bg-white p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <img
                src={customer.image}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-lg">{customer.name}</h2>
                <p className="text-sm text-gray-600">{customer.email}</p>
                <p className="text-sm text-gray-600">{customer.phone}</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <button className=" text-green-700 p-2 rounded-md hover:text-[#2c8d3d] transition-colors">
                <FiEdit size={20} />
              </button>
              <button className="text-red-500  p-2 rounded-md hover:text-red-400 transition-colors">
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customer;
