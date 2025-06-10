"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

/**
 * Provides a styled root container for a popover, extending the Radix UI Popover root primitive.
 *
 * Spreads all received props onto the underlying primitive and adds a `data-slot="popover"` attribute for styling or testing purposes.
 */
function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * Renders a trigger element that toggles the visibility of the popover.
 *
 * Passes all received props to the underlying trigger primitive and adds a `data-slot="popover-trigger"` attribute for styling or identification.
 */
function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * Displays the popover content in a styled portal, positioned relative to the trigger.
 *
 * Renders the content with customizable alignment, offset, and additional styling. The content is rendered in a React portal to ensure proper layering above other UI elements.
 *
 * @param className - Additional CSS classes to apply to the popover content.
 * @param align - Alignment of the popover content relative to the trigger. Defaults to "center".
 * @param sideOffset - Offset distance from the trigger. Defaults to 4.
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * Provides an anchor element for positioning the popover relative to a specific target.
 *
 * Spreads all received props onto the underlying anchor primitive and adds a `data-slot="popover-anchor"` attribute.
 */
function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
