
"use client";

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const SortDropdown = ({
  sortBy,
  onSortChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort"
        className="text-sm text-gray-500"
      >
        সাজান
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-asc">দাম: কম থেকে বেশি</option>
        <option value="price-desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default SortDropdown;
