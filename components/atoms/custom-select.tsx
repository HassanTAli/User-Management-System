// components/Select.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { Checkbox } from "./checkbox";
import Icon from "./icon";

export interface SelectOption {
  id: number | string;
  name: string;
}

interface SelectProps {
  options?: SelectOption[] | string[];
  value?: SelectOption | SelectOption[] | string | string[] | null;
  onChange: (
    value: SelectOption | SelectOption[] | string | string[] | null
  ) => void;
  placeholder?: string;
  multi?: boolean;
  maxSelections?: number;
  searchable?: boolean;
  async?: boolean;
  onSearch?: (query: string) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  label?: string;
  required?: boolean;
  message?: string;
}

export default function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  multi = false,
  maxSelections,
  searchable = false,
  async = false,
  onSearch,
  onLoadMore,
  hasMore = false,
  loading = false,
  label,
  required = false,
  message,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to SelectOption format
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { id: opt, name: opt } : opt
  );

  // Normalize value to SelectOption format
  const normalizeValue = (val: any): SelectOption | SelectOption[] | null => {
    if (!val) return multi ? [] : null;

    if (multi) {
      if (Array.isArray(val)) {
        return val.map((v) => (typeof v === "string" ? { id: v, name: v } : v));
      }
      return [];
    } else {
      return typeof val === "string" ? { id: val, name: val } : val;
    }
  };

  const normalizedValue = normalizeValue(value);
  const selectedArray = multi ? (normalizedValue as SelectOption[]) || [] : [];
  const selectedSingle = !multi
    ? (normalizedValue as SelectOption | null)
    : null;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll for infinite loading
  useEffect(() => {
    if (!async || !hasMore || !isOpen) return;

    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    function handleScroll() {
      if (!dropdown) return;
      const { scrollTop, scrollHeight, clientHeight } = dropdown;
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        onLoadMore?.();
      }
    }

    dropdown.addEventListener("scroll", handleScroll);
    return () => dropdown.removeEventListener("scroll", handleScroll);
  }, [async, hasMore, isOpen, onLoadMore]);

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    if (async) {
      onSearch?.(query);
    }
  };

  // Filter options for client-side search
  const filteredOptions = async
    ? normalizedOptions
    : normalizedOptions.filter((opt) =>
        opt.name.toLowerCase().includes(search.toLowerCase())
      );

  // Check if options are strings (to determine return type)
  const isStringOptions = options.length > 0 && typeof options[0] === "string";

  // Handle selection
  const handleSelect = (option: SelectOption) => {
    if (multi) {
      const isSelected = selectedArray.some((s) => s.id === option.id);
      if (isSelected) {
        const newSelection = selectedArray.filter((s) => s.id !== option.id);
        onChange(
          isStringOptions
            ? newSelection.map((s) => s.id as string)
            : newSelection
        );
      } else {
        if (maxSelections && selectedArray.length >= maxSelections) return;
        const newSelection = [...selectedArray, option];
        onChange(
          isStringOptions
            ? newSelection.map((s) => s.id as string)
            : newSelection
        );
      }
    } else {
      onChange(isStringOptions ? (option.id as string) : option);
      setIsOpen(false);
      setSearch("");
    }
  };

  // Remove single item
  const removeItem = (option: SelectOption, e: React.MouseEvent) => {
    e.stopPropagation();
    if (multi) {
      const newSelection = selectedArray.filter((s) => s.id !== option.id);
      onChange(
        isStringOptions ? newSelection.map((s) => s.id as string) : newSelection
      );
    } else {
      onChange(null);
    }
  };

  // Clear all
  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(multi ? [] : null);
  };

  const isSelected = (option: SelectOption) => {
    if (multi) {
      return selectedArray.some((s) => s.id === option.id);
    }
    return selectedSingle?.id === option.id;
  };

  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Select Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-between
          w-full px-4 py-3
          border rounded-lg
          bg-white
          cursor-pointer
          transition-all duration-200
          border-slate-300
          hover:border-primary-400
          "
      >
        <div className="flex-1 flex flex-wrap gap-1">
          {multi && selectedArray.length > 0 ? (
            selectedArray.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 text-primary-800 rounded text-sm"
              >
                {item.name}
                <Icon
                  name="x"
                  size={14}
                  className="cursor-pointer hover:text-primary-600"
                  onClick={(e: React.MouseEvent) => removeItem(item, e)}
                />
              </span>
            ))
          ) : selectedSingle ? (
            <span className="text-gray-900">{selectedSingle.name}</span>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {((multi && selectedArray.length > 0) || selectedSingle) && (
            <X
              size={16}
              className="text-gray-400 hover:text-gray-600"
              onClick={clearAll}
            />
          )}
          <ChevronDown
            size={20}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="relative z-50">
          <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
            {searchable && (
              <div className="p-2 border-b border-slate-200">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            <div ref={dropdownRef} className="overflow-y-auto flex-1">
              {filteredOptions.length === 0 && !loading ? (
                <div className="p-4 text-center text-gray-500">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const selected = isSelected(option);

                  if (multi) {
                    // Multi-select: always show checkboxes
                    return (
                      <div key={option.id} className="px-2 py-2">
                        <Checkbox
                          label={option.name}
                          checked={selected}
                          onChange={() => handleSelect(option)}
                        />
                      </div>
                    );
                  } else {
                    // Single select: only show non-selected options
                    if (!selected) {
                      return (
                        <div
                          key={option.id}
                          onClick={() => handleSelect(option)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span>{option.name}</span>
                        </div>
                      );
                    }
                    return null;
                  }
                })
              )}

              {loading && (
                <div className="p-4 text-center text-gray-500">Loading...</div>
              )}

              {!loading && hasMore && (
                <div className="p-2 text-center text-sm text-gray-500">
                  Scroll for more...
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {message && <div className="mt-2 text-xs text-slate-500">{message}</div>}
    </div>
  );
}
