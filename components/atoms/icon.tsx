import { FC, SVGProps } from "react";
import {
  Users,
  UserPlus,
  Mail,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  CheckCircle,
  Menu,
  XCircle,
  AlertCircle,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

/**
 * Icon Atom Component
 * Atomic Design: Atom level component
 *
 * A foundational UI element for rendering icons from the `lucide-react` library.
 * This component provides:
 * - A strict, type-safe icon name API
 * - Centralized icon mapping
 * - Consistent sizing and styling
 * - Full SVG prop passthrough without using `any`
 */

/**
 * Supported icon names.
 * These map directly to Lucide icon components via `iconMap`.
 */
export type IconName =
  | "users"
  | "user-plus"
  | "mail"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "check"
  | "x"
  | "upload"
  | "download"
  | "eye"
  | "edit"
  | "trash2"
  | "search"
  | "filter"
  | "check-circle"
  | "menu"
  | "x-circle"
  | "alert-circle";

/**
 * Props for the Icon component.
 *
 * Extends standard SVG props so consumers can pass
 * attributes like `stroke`, `aria-label`, `role`, etc.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Name of the icon to render.
   */
  name: IconName;

  /**
   * Size of the icon (applies to both width and height).
   * Falls back to Lucide's default size if omitted.
   */
  size?: number | string;
}

/**
 * Mapping of icon names to Lucide icon components.
 * Centralizing this mapping ensures:
 * - Type safety
 * - Tree-shaking friendliness
 * - Explicit icon availability
 */
const iconMap: Record<IconName, LucideIcon> = {
  users: Users,
  "user-plus": UserPlus,
  mail: Mail,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "chevron-down": ChevronDown,
  check: Check,
  x: X,
  upload: Upload,
  download: Download,
  eye: Eye,
  edit: Edit,
  trash2: Trash2,
  search: Search,
  filter: Filter,
  "check-circle": CheckCircle,
  menu: Menu,
  "x-circle": XCircle,
  "alert-circle": AlertCircle,
};

/**
 * Icon component.
 *
 * @example
 * ```tsx
 * <Icon name="search" className="text-slate-500" />
 * <Icon name="check" size={20} aria-label="Success" />
 * ```
 */
export const Icon: FC<IconProps> = ({ name, className, size, ...svgProps }) => {
  const IconComponent = iconMap[name];

  // This should never happen due to strict typing,
  // but acts as a runtime safeguard.
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return <IconComponent className={className} size={size} {...svgProps} />;
};

export default Icon;
