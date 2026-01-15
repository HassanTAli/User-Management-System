"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef,
} from "@tanstack/react-table";
import Image from "next/image";
import Icon from "../atoms/icon";

type Status = "Active" | "Verified" | "Inactive";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  status: Status;
  image?: string;
}

const data: User[] = [
  {
    id: "1",
    name: "Mohamed Ahmed",
    email: "mo.ahmed@example.com",
    age: 30,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Nada Ali",
    email: "nada.ali@example.com",
    age: 28,
    status: "Verified",
  },
];

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const getStatusColor = (status: Status): string => {
  switch (status) {
    case "Active":
      return "bg-primary-100 text-primary-800";
    case "Verified":
      return "bg-green-100 text-green-800";
    case "Inactive":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function DataTable() {
  const [tableData, setTableData] = useState<User[]>(data);

  const handleView = (user: User) => {
    alert(`Viewing user: ${user.name}`);
  };

  const handleEdit = (user: User) => {
    alert(`Editing user: ${user.name}`);
  };

  const handleDelete = (id: string) => {
    alert(`Deleting user with id: ${id}`);
  };

  const columnHelper = createColumnHelper<User>();

  const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const user = info.row.original;
        return (
          <div className="flex items-center gap-3">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-sm">
                {getInitials(user.name)}
              </div>
            )}
            <span className="font-medium text-gray-900">{info.getValue()}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
    }),
    columnHelper.accessor("age", {
      header: "Age",
      cell: (info) => <span className="text-gray-900">{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (info) => {
        const user = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleView(user)}
              className="p-1.5 text-slate-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="View"
            >
              {/* <Eye className="w-4 h-4" /> */}
              <Icon name="eye" size={16} />
            </button>
            <button
              onClick={() => handleEdit(user)}
              className="p-1.5 text-slate-600 hover:bg-amber-50 rounded-lg transition-colors"
              title="Edit"
            >
              {/* <Edit className="w-4 h-4" /> */}
              <Icon name="edit" size={16} />
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete"
            >
              {/* <Trash2 className="w-4 h-4" /> */}
              <Icon name="trash2" size={16} />
            </button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-4">Table</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
