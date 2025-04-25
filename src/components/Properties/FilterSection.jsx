const FilterSection = () => {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select className="w-full p-2 border rounded-md">
          <option value="">All Categories</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
