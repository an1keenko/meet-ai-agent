import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a styled card container with base layout, background, border, and shadow.
 *
 * Accepts all standard div props and merges additional class names with default card styles.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
      {...props}
    />
  );
}

/**
 * Renders the header section of a card with grid layout and responsive styling.
 *
 * Applies container queries and grid columns to accommodate optional card actions.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the title section of a card with bold styling.
 *
 * @remark
 * Intended to be used within a card layout to display the card's main heading or title.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("leading-none font-semibold", className)} {...props} />;
}

/**
 * Renders a card description section with muted text styling.
 *
 * @remark Intended to display supplementary or descriptive text within a card component.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

/**
 * Renders the action area of a card, positioned in the top-right corner for actions such as buttons or menus.
 *
 * @remark
 * This component is intended to be used within a card header layout and is styled to occupy the second column and span two rows.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

/**
 * Renders the content section of a card with horizontal padding.
 *
 * @remark
 * Additional props are spread onto the underlying div element.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

/**
 * Renders the footer section of a card with horizontal padding and vertical centering.
 *
 * @remark Adds top padding if a top border is present.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-footer" className={cn("flex items-center px-6 [.border-t]:pt-6", className)} {...props} />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
