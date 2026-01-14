import React from "react";
import Icon, { IconName } from "@/components/atoms/icon";

/**
 * Icon Atom Showcase
 * Demonstrates all available icons from the Icon atom component
 */

const allIcons: IconName[] = [
  "users",
  "user-plus",
  "mail",
  "chevron-right",
  "chevron-left",
  "check",
  "x",
  "upload",
  "download",
  "eye",
  "edit",
  "trash2",
  "search",
  "filter",
  "check-circle",
  "menu",
  "x-circle",
  "alert-circle",
];

export const IconShowcase: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h2 className="heading-2 mb-6 text-slate-800">All Icons</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
          {allIcons.map((iconName) => (
            <div
              key={iconName}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
            >
              <Icon name={iconName} className="w-6 h-6 text-slate-700" />
              <span className="caption text-slate-600 text-center">
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IconShowcase;
