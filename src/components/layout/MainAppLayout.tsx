import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  // Layout Requirements:
  // overall.sizing.sidebarLeft: "w-64" -> 256px
  // overall.sizing.header: "h-[60px]"
  // overall.sizing.sidebarRight: "w-64" -> 256px
  // mainContent.layout: "p-6 mt-[60px]"
  // mainContent.sizing: "min-w-0 overflow-y-auto"
  // sidebarRight.layout: "flex flex-col fixed top-[60px] right-0 bg-surface h-[calc(100vh-60px)] w-64 p-4"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Sidebar />
      
      <main 
        className={cn(
          'ml-[256px] mr-[256px] mt-[60px]', // Offsets for fixed left/right sidebars and header
          'h-[calc(100vh-60px)]', // Fill remaining vertical space
          'overflow-y-auto', // Enable scrolling for main content
          'p-6', // Inner padding for the content area
          'min-w-0' // From overall.sizing.mainContent
        )}
      >
        {children}
      </main>

      {/* Right Sidebar Placeholder based on layout requirements */}
      <aside 
        className={cn(
          'fixed top-[60px] right-0 w-64 h-[calc(100vh-60px)]',
          'bg-card', // 'bg-surface' which maps to 'card' color
          'p-4',
          'border-l border-border',
          'overflow-y-auto',
          'flex flex-col gap-4 shadow-md z-10'
        )}
      >
        <div>
          <h3 className="text-md font-semibold text-card-foreground mb-2">Stories</h3>
          <div className="h-40 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground p-2">
            {/* Placeholder for StoriesPanel component */}
            <p className="text-center">Stories Panel: Add to Story & User Story Avatars</p>
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold text-card-foreground mb-2">Suggested Groups</h3>
          <div className="h-60 rounded-lg bg-muted flex flex-col items-center justify-center text-sm text-muted-foreground p-2 space-y-2">
            {/* Placeholder for SuggestedGroups component */}
            <p className="text-center">Group Suggestion 1</p>
            <p className="text-center">Group Suggestion 2</p>
            <p className="text-center">Group Suggestion 3</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainAppLayout;
