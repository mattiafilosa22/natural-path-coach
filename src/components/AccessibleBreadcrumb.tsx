import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface AccessibleBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const AccessibleBreadcrumb: React.FC<AccessibleBreadcrumbProps> = ({
  items,
  className = ''
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-sm ${className}`}
      role="navigation"
    >
      <ol className="flex items-center space-x-2" role="list">
        {items.map((item, index) => (
          <li key={index} role="listitem">
            <div className="flex items-center">
              {index === 0 && (
                <Home
                  className="h-4 w-4 mr-1"
                  aria-hidden="true"
                />
              )}

              {item.current ? (
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label={`Vai a ${item.label}`}
                >
                  {item.label}
                </a>
              )}

              {index < items.length - 1 && (
                <ChevronRight
                  className="h-4 w-4 ml-2 text-muted-foreground"
                  aria-hidden="true"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default AccessibleBreadcrumb;
