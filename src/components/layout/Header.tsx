import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  Bell,
  MessageSquare,
  ChevronDown,
  HelpCircle, // Using HelpCircle as a generic icon for one of the actions
  Plus
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna',
    avatarUrl: 'https://i.pravatar.cc/32?u=olenna.mason',
  };

  const iconButtonClass = "h-10 w-10 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full";

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 h-[60px] bg-card text-card-foreground flex items-center justify-between px-4 border-b border-border shadow-sm z-50',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2">
        <a href="/" aria-label="Facebook home">
          <Facebook size={40} className="text-primary" />
        </a>
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-10 pr-3 py-2 h-10 w-[240px] rounded-full bg-background border-none focus-visible:ring-primary focus-visible:ring-2"
          />
        </div>
      </div>

      {/* Middle Section: Navigation (conceptual, in Facebook it's more complex) */}
      {/* For this clone, primary navigation icons are often on the right or part of header actions */}
      {/* This section can be used for main navigation tabs like Home, Watch, etc. if design differs */}
      {/* Example for FB like navigation: */}
      <nav className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" className="h-12 w-24 hover:bg-accent rounded-lg text-primary border-b-2 border-primary">
          <Home size={24} />
        </Button>
        <Button variant="ghost" className="h-12 w-24 hover:bg-accent rounded-lg text-secondary-foreground">
          <Users size={24} />
        </Button>
        {/* Add more navigation items like Watch, Marketplace, Groups if needed here */}
      </nav>

      {/* Right Section: Profile, Actions, Notifications */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="hidden lg:flex items-center space-x-2 rounded-full px-3 py-1.5 hover:bg-accent">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">{user.name}</span>
        </Button>

        <Button variant="ghost" size="icon" className={iconButtonClass} aria-label="Create">
          <Plus size={20} />
        </Button>

        <Button variant="ghost" size="icon" className={cn(iconButtonClass, 'relative')} aria-label="Messenger">
          <MessageSquare size={20} />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 min-w-0 p-0 flex items-center justify-center text-xs">8</Badge>
        </Button>

        <Button variant="ghost" size="icon" className={cn(iconButtonClass, 'relative')} aria-label="Notifications">
          <Bell size={20} />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 min-w-0 p-0 flex items-center justify-center text-xs">36</Badge>
        </Button>

        <Button variant="ghost" size="icon" className={iconButtonClass} aria-label="Account">
          <ChevronDown size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
