import { FC } from "react";
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
  LucideIcon,
} from "lucide-react";

/**
 * Icon Atom Component
 * Atomic Design: Atom level component
 *
 * A foundational UI element for displaying icons from Lucide Icons library.
 * Provides consistent icon rendering with customizable styling.
 */

export type IconName =
  | "users"
  | "user-plus"
  | "mail"
  | "chevron-right"
  | "chevron-left"
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

export interface IconProps {
  /** Name of the icon to display */
  name: IconName;

  /** Additional CSS classes */
  className?: string;

  /** Size of the icon (width and height) */
  size?: number | string;

  /** Additional props to pass to the underlying SVG element */
  [key: string]: any;
}

// Icon mapping
const iconMap: Record<IconName, LucideIcon> = {
  users: Users,
  "user-plus": UserPlus,
  mail: Mail,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
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

export const Icon: FC<IconProps> = ({
  name,
  className = "",
  size,
  ...props
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return <IconComponent className={className} size={size} {...props} />;
};

export default Icon;
