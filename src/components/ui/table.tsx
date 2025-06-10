"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a styled table with horizontal scrolling support.
 *
 * Wraps the table in a container div to enable horizontal overflow handling and applies base styling for full width and small text.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  );
}

/**
 * Renders a table header section with a bottom border applied to all rows.
 *
 * Spreads additional props onto the underlying `<thead>` element and allows custom class names.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
}

/**
 * Renders a styled table body (`<tbody>`) element with no border on the last row.
 *
 * Spreads additional props onto the `<tbody>` element and allows custom class names.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

/**
 * Renders a styled table footer with a muted background, top border, and medium font weight.
 *
 * Applies custom class names and spreads additional props onto the underlying `<tfoot>` element.
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  );
}

/**
 * Renders a table row with hover and selected state background styling, a bottom border, and color transition effects.
 *
 * @param className - Additional class names to apply to the row.
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)}
      {...props}
    />
  );
}

/**
 * Renders a styled table header cell (`<th>`) with customizable class names.
 *
 * Applies foreground text color, fixed height, padding, left alignment, medium font weight, and prevents text wrapping. Adjusts padding and vertical alignment if a checkbox is present.
 *
 * @param className - Additional class names to apply.
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled table cell (`<td>`) with consistent padding, vertical alignment, and whitespace handling.
 *
 * @remark
 * If the cell contains a child with `role="checkbox"`, right padding is removed and the checkbox is vertically adjusted for alignment.
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled table caption with muted text color and top margin.
 *
 * Accepts all standard HTML caption props and allows additional class names for customization.
 */
function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption data-slot="table-caption" className={cn("text-muted-foreground mt-4 text-sm", className)} {...props} />
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
