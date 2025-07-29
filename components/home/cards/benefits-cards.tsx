import { cn } from "@/lib/utils";
import type React from "react";

interface BenefitsCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export default function BenefitsCard({
  title,
  description,
  icon,
  className = "",
  children,
}: BenefitsCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-md text-start text-white relative overflow-hidden",
        className
      )}
    >
      {children ? (
        children
      ) : (
        <div className="p-6">
          {" "}
          {icon && <div className="mb-4">{icon}</div>}
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-base">{description}</p>}
        </div>
      )}
    </div>
  );
}
