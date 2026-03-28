"use client";

import { useState } from "react";
import { pulauList, agamaList, eraList } from "@/data/kategori";
import { ChevronDown, Filter as FilterIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FilterBarProps {
  onFilterChange: (filters: { 
    pulau: string; 
    agama: string; 
    era: string; 
    search: string 
  }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    pulau: "",
    agama: "",
    era: "",
    search: ""
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = { pulau: "", agama: "", era: "", search: "" };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const hasActiveFilters = filters.pulau || filters.agama || filters.era || filters.search;

  return (
    <div className="bg-surface border border-border-dark rounded-xl p-4 mb-8 shadow-lg">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="w-full md:w-1/3 relative">
          <input
            type="text"
            placeholder="Cari nama candi atau lokasi..."
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex flex-wrap items-center gap-4 flex-1">
          <div className="relative group flex-1">
            <select
              value={filters.pulau}
              onChange={(e) => handleChange("pulau", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="">Semua Pulau</option>
              {pulauList.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-3 pointer-events-none group-hover:text-gold" />
          </div>

          <div className="relative group flex-1">
            <select
              value={filters.agama}
              onChange={(e) => handleChange("agama", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="">Semua Agama</option>
              {agamaList.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
            <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-3 pointer-events-none group-hover:text-gold" />
          </div>

          <div className="relative group flex-1">
            <select
              value={filters.era}
              onChange={(e) => handleChange("era", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {eraList.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
            </select>
            <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-3 pointer-events-none group-hover:text-gold" />
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-2.5 text-sm font-medium text-text-muted hover:text-white bg-border-dark/50 hover:bg-border-dark rounded-lg transition-colors flex items-center justify-center gap-2"
              title="Reset Filter"
            >
              <X className="w-4 h-4" /> Reset
            </button>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-full flex items-center justify-center gap-2 bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm font-medium text-text-primary hover:border-gold transition-colors"
        >
          <FilterIcon className="w-4 h-4" />
          Filter & Urutkan
        </button>
      </div>

      {/* Mobile Filters Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden mt-4 pt-4 border-t border-border-dark flex flex-col gap-4"
          >
            <select
              value={filters.pulau}
              onChange={(e) => handleChange("pulau", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-gold"
            >
              <option value="">Semua Pulau</option>
              {pulauList.map(p => <option key={p} value={p}>{p}</option>)}
            </select>

            <select
              value={filters.agama}
              onChange={(e) => handleChange("agama", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-gold"
            >
              <option value="">Semua Agama</option>
              {agamaList.map(a => <option key={a} value={a}>{a}</option>)}
            </select>

            <select
              value={filters.era}
              onChange={(e) => handleChange("era", e.target.value)}
              className="w-full bg-background-200 border border-border-dark rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-gold"
            >
              {eraList.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2.5 text-sm font-medium text-text-muted hover:text-white bg-border-dark/50 hover:bg-border-dark rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" /> Reset Filter
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
