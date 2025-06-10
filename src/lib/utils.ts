import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS class names, resolving Tailwind CSS class conflicts.
 *
 * Accepts any number of class name values, conditionally joins them, and merges Tailwind CSS classes to ensure the final string has no conflicting utilities.
 *
 * @param inputs - Class name values to combine and merge.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
