import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  href?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

const Card: React.FC<CardProps> = ({ href, title, description, icon: Icon }) => {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      {...(href ? { href } : {})}
      className={`block border border-zinc-800 p-4 sm:p-6 ${href ? 'hover:border-zinc-700 active:border-zinc-600 transition-colors' : ''}`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="shrink-0 text-zinc-400 mt-0.5">
            <Icon size={20} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-medium text-zinc-50 mb-1 sm:mb-2">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    </Component>
  );
};

export default Card;
