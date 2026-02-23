import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 font-mono text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-canvas/50 hover:text-canvas transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-canvas font-bold" : "text-canvas/50"}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-canvas/30">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
