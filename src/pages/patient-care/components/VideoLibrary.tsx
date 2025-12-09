import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { EducationalVideo } from '../types';

interface VideoLibraryProps {
  videos: EducationalVideo[];
}

const VideoLibrary = ({ videos }: VideoLibraryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(videos.map(v => v.category)))];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-card rounded-xl border border-border overflow-hidden hover-lift cursor-pointer group"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-confident"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-brand">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-brand">
                  <Icon name="Play" size={32} color="white" />
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-xs font-medium">
                {video.duration}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {video.category}
                </span>
                <span className="text-xs text-text-secondary flex items-center">
                  <Icon name="Eye" size={14} className="mr-1" />
                  {video.views}
                </span>
              </div>
              <h4 className="font-headline text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                {video.title}
              </h4>
              <p className="text-sm text-text-secondary line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Video" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
          <p className="text-text-secondary">No videos found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;