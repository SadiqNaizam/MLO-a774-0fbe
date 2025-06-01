import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PostFeed from '@/components/Feed/PostFeed'; // Assuming this component exists and accepts Post[] props

// Data structure definitions for Posts
// In a larger application, these might be in a dedicated types file or co-located with components.
export interface UserProfile {
  name: string;
  avatarUrl: string;
  profileLink?: string;
}

export interface PostAttachment {
  type: 'image' | 'video' | 'link' | 'map';
  url?: string; // for image/video direct URL, or link URL
  thumbnailUrl?: string; // for video thumbnail or link preview image
  title?: string; // for link or map title
  description?: string; // for link
  siteName?: string; // for link, e.g., 'youtube.com', 'nytimes.com'
  mapData?: { // Specific data for map type attachments
    query: string; // Search query for the map, e.g., "Raleigh, North Carolina"
    imageUrl: string; // URL of a static map image
  };
}

export interface PostInteractionStats {
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

export interface Post {
  id: string;
  author: UserProfile;
  timestamp: string; // Human-readable time, e.g., "2h ago", "Yesterday at 5:30 PM"
  privacy: 'Public' | 'Friends' | 'Specific Friends' | 'Only Me'; // To determine visibility/icon
  textContent?: string; // The main text content of the post
  attachments?: PostAttachment[]; // Array of images, videos, links, etc.
  activity?: string; // Describes user activity, e.g., "is feeling happy", "is watching Interstellar", "is in Raleigh, North Carolina"
  taggedUsers?: UserProfile[]; // Users tagged in the post
  locationText?: string; // Optional plain text location if not covered by activity or map attachment
  stats: PostInteractionStats;
  isLikedByCurrentUser?: boolean;
  isSavedByCurrentUser?: boolean; // For features like 'Save Post'
}

// Dummy data for the PostFeed component
const dummyPosts: Post[] = [
  {
    id: 'post-1',
    author: {
      name: 'Alice Wonderland',
      avatarUrl: 'https://i.pravatar.cc/40?u=alice',
      profileLink: '/profile/alice',
    },
    timestamp: '2h ago',
    privacy: 'Friends' as const,
    textContent: 'Just had a wonderful tea party! ☕ Wonderland is amazing this time of year. Explored the Whispering Woods and met the Cheshire Cat again. #TeaTime #WonderlandAdventures #Magical',
    stats: { likesCount: 152, commentsCount: 18, sharesCount: 5 },
    isLikedByCurrentUser: true,
  },
  {
    id: 'post-julia-fillory-checkin',
    author: { name: 'Julia Fillory', avatarUrl: 'https://i.pravatar.cc/40?u=julia.fillory', profileLink: '/profile/juliafillory' },
    timestamp: '2 hrs',
    privacy: 'Public' as const,
    activity: 'is in Raleigh, North Carolina.',
    textContent: 'Checking out some new stores downtown! Found an amazing little bakery and a cool vintage shop. Highly recommend exploring this area!',
    attachments: [
      {
        type: 'map' as const,
        mapData: {
          query: 'Raleigh, North Carolina',
          imageUrl: 'https://source.unsplash.com/random/800x450/?map,city,Raleigh&sig=123', // Placeholder static map image
        },
        title: 'Raleigh, North Carolina'
      },
    ],
    taggedUsers: [
      { name: 'Bryan Durand', avatarUrl: 'https://i.pravatar.cc/30?u=bryand', profileLink: '/profile/bryand' },
      { name: 'Casey Lee', avatarUrl: 'https://i.pravatar.cc/30?u=caseyl', profileLink: '/profile/caseyl' },
    ],
    stats: { likesCount: 78, commentsCount: 12, sharesCount: 4 },
    isLikedByCurrentUser: false,
    isSavedByCurrentUser: true,
  },
  {
    id: 'post-2',
    author: {
      name: 'Bob The Builder',
      avatarUrl: 'https://i.pravatar.cc/40?u=bobthebuilder',
      profileLink: '/profile/bob',
    },
    timestamp: '5h ago',
    privacy: 'Public' as const,
    activity: 'is at The Grand Canyon',
    textContent: 'Finished building this amazing new viewpoint. The views are incredible! Can we fix it? Yes, we can! 🛠️ #Construction #Engineering #GrandCanyonViews',
    attachments: [
      { type: 'image' as const, url: 'https://source.unsplash.com/random/800x600/?canyon,landscape&sig=1' }
    ],
    stats: { likesCount: 1250, commentsCount: 123, sharesCount: 98 },
    isLikedByCurrentUser: false,
    isSavedByCurrentUser: true,
  },
  {
    id: 'post-3',
    author: {
      name: 'Tech Weekly Digest',
      avatarUrl: 'https://i.pravatar.cc/40?u=techweekly',
      profileLink: '/profile/techweekly',
    },
    timestamp: 'Yesterday at 3:00 PM',
    privacy: 'Public' as const,
    textContent: 'Exciting news in the world of AI! Check out this article on the latest breakthroughs in machine learning and neural networks. The future is now!',
    attachments: [
      {
        type: 'link' as const,
        url: 'https://example.com/ai-breakthroughs-2024',
        title: 'The Future of AI: Groundbreaking Developments in 2024',
        description: 'Explore how artificial intelligence is reshaping industries and what to expect in the coming years. New models, ethical considerations, and transformative applications are discussed.',
        thumbnailUrl: 'https://source.unsplash.com/random/800x400/?technology,ai,future&sig=2',
        siteName: 'TechCrunchyNews.com'
      }
    ],
    stats: { likesCount: 560, commentsCount: 88, sharesCount: 112 },
  },
  {
    id: 'post-4',
    author: {
      name: 'Foodie Fiona',
      avatarUrl: 'https://i.pravatar.cc/40?u=fiona',
      profileLink: '/profile/fiona',
    },
    timestamp: '3 days ago',
    privacy: 'Friends' as const,
    activity: 'is feeling hungry 🍜',
    textContent: 'Made this delicious ramen from scratch today! So proud of how it turned out. Who wants the recipe? #HomeCooking #RamenLover #FoodPhotography',
    attachments: [
      { type: 'image' as const, url: 'https://source.unsplash.com/random/800x700/?ramen,food&sig=3' },
      { type: 'image' as const, url: 'https://source.unsplash.com/random/800x700/?noodles,soup&sig=4' }
    ],
    stats: { likesCount: 320, commentsCount: 45, sharesCount: 22 },
    isLikedByCurrentUser: true,
  }
];

const IndexPage: React.FC = () => {
  // In a real application, this data would likely come from an API call and be managed by state (e.g., useState, useQuery).
  // const { data: posts, isLoading, error } = useFetchPosts();

  // For this example, we use the static dummyPosts array.
  // A CreatePost component would typically be included here, above the PostFeed.
  // e.g., <CreatePost onNewPost={(newPost) => setPosts([newPost, ...posts])} />
  
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* Placeholder for Create Post Bar if it's a separate component */}
        {/* <CreatePostCard user={currentUserProfile} /> */}
        <PostFeed posts={dummyPosts} />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
