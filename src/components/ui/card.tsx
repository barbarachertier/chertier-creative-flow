import * as React from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   CARD ROOT
   ------------------------------------------------------------------ */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

/* ------------------------------------------------------------------
   HEADER / TITLE / DESCRIPTION
   ------------------------------------------------------------------ */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

/* ------------------------------------------------------------------
   MEDIA — rettangolo fisso con spazio bianco (object-contain)
   ------------------------------------------------------------------ */
const CardMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full h-48 md:h-60 flex items-center justify-center bg-white overflow-hidden",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
CardMedia.displayName = "CardMedia";

/* Convenience <img> wrapper */
const CardImage = ({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={cn("max-w-full max-h-full object-contain select-none", className)}
  />
);

/* ------------------------------------------------------------------
   CONTENT / FOOTER
   ------------------------------------------------------------------ */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

/* ------------------------------------------------------------------
   EXPORTS
   ------------------------------------------------------------------ */
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardMedia,
  CardImage,
};
