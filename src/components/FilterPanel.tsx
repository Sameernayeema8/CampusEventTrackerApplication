import React from 'react';
import { FilterState } from '../types/Event';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  organizers: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange, organizers }) => {
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      status: 'all',
      organizer: 'all',
      dateRange: 'all'
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Status Filter */}
      <div>
        <label htmlFor="status-filter" className="block text-xs font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          id="status-filter"
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Organizer Filter */}
      <div>
        <label htmlFor="organizer-filter" className="block text-xs font-medium text-gray-700 mb-1">
          Organizer
        </label>
        <select
          id="organizer-filter"
          value={filters.organizer}
          onChange={(e) => handleFilterChange('organizer', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Organizers</option>
          {organizers.map(organizer => (
            <option key={organizer} value={organizer}>{organizer}</option>
          ))}
        </select>
      </div>

      {/* Date Range Filter */}
      <div>
        <label htmlFor="date-filter" className="block text-xs font-medium text-gray-700 mb-1">
          Date Range
        </label>
        <select
          id="date-filter"
          value={filters.dateRange}
          onChange={(e) => handleFilterChange('dateRange', e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Dates</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="past">Past Events</option>
        </select>
      </div>

      {/* Clear Filters */}
      <div className="flex items-end">
        <button
          onClick={clearFilters}
          className="w-full px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;