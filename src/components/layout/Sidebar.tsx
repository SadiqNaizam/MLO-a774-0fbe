import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  Tv,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Settings
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  count?: number;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, count, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150 cursor-pointer',
        isActive ? 'bg-sidebar-accent text-sidebar-primary-foreground font-semibold' : 'text-sidebar-foreground',
      )}
    >
      <Icon size={20} className={cn(isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
      <span className="flex-1 text-sm">{label}</span>
      {count && (
        <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
          {count}
        </span>
      )}
    </a>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/40?u=olenna.mason',
  };

  const mainNavigation = [
    { icon: Newspaper, label: 'News Feed', href: '/', isActive: true },
    { icon: MessageCircle, label: 'Messenger', href: '/messenger', count: 3 },
    { icon: Tv, label: 'Watch', href: '/watch' },
    { icon: Store, label: 'Marketplace', href: '/marketplace' },
  ];

  const shortcuts = [{ icon: Gamepad2, label: 'FarmVille 2', href: '/farmville2' }];

  const exploreNavigation = [
    { icon: CalendarDays, label: 'Events', href: '/events' },
    { icon: Flag, label: 'Pages', href: '/pages' },
    { icon: Users, label: 'Groups', href: '/groups' },
    { icon: ListChecks, label: 'Friend Lists', href: '/friend-lists' },
    { icon: HeartHandshake, label: 'Fundraisers', href: '/fundraisers' },
  ];

  const createLinks = [
    { label: 'Ad', href: '/create/ad' },
    { label: 'Page', href: '/create/page' },
    { label: 'Group', href: '/create/group' },
    { label: 'Event', href: '/create/event' },
    { label: 'Fundraiser', href: '/create/fundraiser' },
  ];

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col shadow-md z-20',
        className
      )}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-1">
          <a href="/profile" className="flex items-center space-x-3 p-2 rounded-md hover:bg-sidebar-accent group">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm group-hover:text-sidebar-accent-foreground">{user.name}</span>
          </a>
          {mainNavigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        <Separator className="my-2 bg-sidebar-border" />

        <div className="p-4 space-y-1">
          <h3 className="px-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-1">
            Shortcuts
          </h3>
          {shortcuts.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        <Separator className="my-2 bg-sidebar-border" />

        <div className="p-4 space-y-1">
          <h3 className="px-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-1">
            Explore
          </h3>
          {exploreNavigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <NavItem icon={ChevronDown} label="See More..." onClick={() => console.log('See More Explore')} />
        </div>

        <Separator className="my-2 bg-sidebar-border" />

        <div className="p-4 space-y-1">
          <h3 className="px-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-1">
            Create
          </h3>
          {createLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 px-2 py-1.5 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150 cursor-pointer text-sidebar-foreground/90"
            >
              <PlusCircle size={16} className="text-sidebar-foreground/70" />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="p-3 border-t border-sidebar-border">
        <NavItem icon={Settings} label="Settings & Privacy" href="/settings" />
      </div>
    </aside>
  );
};

export default Sidebar;
