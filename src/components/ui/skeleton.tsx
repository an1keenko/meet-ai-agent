import { cn } from "@/lib/utils";

/**
 * Renders a skeleton loading placeholder as a styled div.
 *
 * Combines default skeleton styles with any additional classes provided via {@link className}. All other div props are supported.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn("bg-accent animate-pulse rounded-md", className)} {...props} />;
}

export { Skeleton };
