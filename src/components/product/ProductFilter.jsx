import React from 'react';
import { CATEGORIES, PRICE_RANGES, RATING_OPTIONS } from '../../utils/constants';
import { capitalize } from '../../utils/helpers';

const ProductFilter = ({
  filters,
  onToggleCategory,
  onPriceRangeChange,
  onRatingChange,
  onClearFilters,
  hasActiveFilters,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => onToggleCategory(category)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700 group-hover:text-primary transition-colors">
                {capitalize(category)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, index) => (
            <label key={index} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="priceRange"
                checked={
                  filters.priceRange?.min === range.min &&
                  filters.priceRange?.max === range.max
                }
                onChange={() => onPriceRangeChange(range)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700 group-hover:text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
          <label className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="priceRange"
              checked={filters.priceRange === null}
              onChange={() => onPriceRangeChange(null)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-700 group-hover:text-primary transition-colors">
              All Prices
            </span>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Rating</h4>
        <div className="space-y-2">
          {RATING_OPTIONS.map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === option.value}
                onChange={() => onRatingChange(option.value)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700 group-hover:text-primary transition-colors flex items-center">
                {option.label}
                <span className="ml-1 text-yellow-400">★</span>
              </span>
            </label>
          ))}
          <label className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name="rating"
              checked={filters.rating === null}
              onChange={() => onRatingChange(null)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-700 group-hover:text-primary transition-colors">
              All Ratings
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
