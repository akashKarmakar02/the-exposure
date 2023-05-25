"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Options({ categories }: any) {
  const navigator = useRouter();
  const path = usePathname();

  return (
    <div className="flex justify-end mb-2 mx-10">
      <div>
        <label
          htmlFor="filter"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter
        </label>
        <select
          id="filter"
          onChange={(e) => {
            navigator.push(e.target.value);
          }}
          defaultValue={path}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={'/gallery'}>All</option>
          {categories.map((category: any) => (
            <option
              key={category._id}
              value={`/gallery/${category.slug.current}`}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
