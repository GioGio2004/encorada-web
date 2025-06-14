"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { 
  RefreshCw, 
  Grid, 
  List, 
  Shuffle, 
  Heart, 
  Download, 
  ExternalLink, 
  Search,
  Camera,
  Sparkles,
  ArrowLeft,
  X,
  Copy,
  Check,
  Menu
} from 'lucide-react';

interface ImageData {
  nature: string[];
  programmers: string[];
  animals: string[];
  people: string[];
  random10: string[];
  queryImages: string[];
}

interface ApiResponse {
  success: boolean;
  nature: string[];
  programmers: string[];
  animals: string[];
  people: string[];
  random10: string[];
  queryImages: string[];
  error?: string;
  type?: string;
}

interface Category {
  key: keyof ImageData;
  label: string;
  icon: React.ComponentType<any> | string;
  color: string;
}

interface ImageCardProps {
  imageUrl: string;
  index: number;
  onToggleFavorite: (url: string) => void;
  onDownload: (url: string) => void;
  onOpen: (url: string) => void;
  onSelect: (url: string) => void;
  onCopyLink: (url: string) => void;
  isFavorite: boolean;
  isCopied: boolean;
}

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
  onCopyLink: (url: string) => void;
  isCopied: boolean;
}

type ViewMode = 'grid' | 'list';

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<ImageData>({
    nature: [],
    programmers: [],
    animals: [],
    people: [],
    random10: [],
    queryImages: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<keyof ImageData>('random10');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [copiedLinks, setCopiedLinks] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories: Category[] = [
    { key: 'random10', label: 'Random Selection', icon: Shuffle, color: 'from-purple-500 to-pink-500' },
    { key: 'nature', label: 'Nature', icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { key: 'programmers', label: 'Programmers', icon: '💻', color: 'from-blue-500 to-purple-500' },
    { key: 'animals', label: 'Animals', icon: '🐾', color: 'from-orange-500 to-red-500' },
    { key: 'people', label: 'People', icon: '👥', color: 'from-pink-500 to-violet-500' },
    { key: 'queryImages', label: 'Search Results', icon: Search, color: 'from-cyan-500 to-blue-500' }
  ];

  const fetchImages = async (query: string = ''): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const url = query ? `/api/images?query=${encodeURIComponent(query)}` : '/api/images';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch images');
      const data: ApiResponse = await response.json();
      
      if (data.success) {
        setImages(data);
        if (query && data.queryImages?.length > 0) {
          setActiveCategory('queryImages');
        }
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  };

  const handleSearch = (query: string): void => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim()) {
      setIsSearching(true);
      searchTimeoutRef.current = setTimeout(() => {
        fetchImages(query);
      }, 500);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  const toggleFavorite = (imageUrl: string): void => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageUrl)) {
      newFavorites.delete(imageUrl);
    } else {
      newFavorites.add(imageUrl);
    }
    setFavorites(newFavorites);
  };

  const downloadImage = (imageUrl: string): void => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `image-${Date.now()}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openImage = (imageUrl: string): void => {
    window.open(imageUrl, '_blank');
  };

  const copyImageLink = async (imageUrl: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopiedLinks(prev => new Set(prev).add(imageUrl));
      
      setTimeout(() => {
        setCopiedLinks(prev => {
          const newSet = new Set(prev);
          newSet.delete(imageUrl);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      const textArea = document.createElement('textarea');
      textArea.value = imageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopiedLinks(prev => new Set(prev).add(imageUrl));
      setTimeout(() => {
        setCopiedLinks(prev => {
          const newSet = new Set(prev);
          newSet.delete(imageUrl);
          return newSet;
        });
      }, 2000);
    }
  };

  const ImageCard: React.FC<ImageCardProps> = ({ 
    imageUrl, 
    index, 
    onToggleFavorite, 
    onDownload, 
    onOpen, 
    onSelect,
    onCopyLink,
    isFavorite,
    isCopied
  }) => (
    <Card 
      className="group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => onSelect(imageUrl)}
    >
      <CardContent className="p-0 relative">
        <img
          src={imageUrl}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button
                size="sm"
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onToggleFavorite(imageUrl);
                }}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                size="sm"
                className={`backdrop-blur-sm transition-all duration-200 ${
                  isCopied 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-white/90 hover:bg-white text-black'
                }`}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onCopyLink(imageUrl);
                }}
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onDownload(imageUrl);
                }}
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onOpen(imageUrl);
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            {isFavorite && (
              <Heart className="w-5 h-5 fill-red-500 text-red-500 animate-pulse" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const LoadingSkeleton: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} className="h-64 w-full rounded-lg bg-white/10" />
      ))}
    </div>
  );

  const Modal: React.FC<ModalProps> = ({ imageUrl, onClose, onCopyLink, isCopied }) => (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-full">
        <img
          src={imageUrl}
          alt="Full size image"
          className="max-w-full max-h-full object-contain animate-in zoom-in duration-500 rounded-lg"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            className={`backdrop-blur-sm transition-all duration-200 ${
              isCopied 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-black/50 hover:bg-black/70 text-white'
            }`}
            size="sm"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onCopyLink(imageUrl);
            }}
          >
            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
          <Button
            className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
            size="sm"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <Card className="p-8 max-w-md w-full mx-4 bg-white/10 backdrop-blur-lg border-white/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Error Loading Images</h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <Button 
              onClick={() => fetchImages()} 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentImages = images[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-black/40 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 lg:transform-none ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full p-6">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Gallery</h2>
                <p className="text-gray-400 text-sm">grab-picture</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* View Mode Toggle */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-400 mb-3">View Mode</h3>
            <div className="grid grid-cols-2 gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-1">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className={`w-full ${viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className={`w-full ${viewMode === 'list' ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.key;
                const count = images[category.key]?.length || 0;
                
                if (category.key === 'queryImages' && count === 0) return null;
                
                return (
                  <Button
                    key={category.key}
                    variant={isActive ? 'default' : 'ghost'}
                    className={`w-full justify-start transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setSidebarOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        {typeof Icon === 'string' ? (
                          <span className="text-lg">{Icon}</span>
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                        <span>{category.label}</span>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {count}
                      </Badge>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Refresh Button */}
          <Button
            onClick={() => fetchImages()}
            disabled={loading}
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10 mt-6"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh Gallery
          </Button>

          {/* Stats */}
          <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>Total Images</span>
                </div>
                <span className="font-semibold text-white">{Object.values(images).flat().length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Favorites</span>
                </div>
                <span className="font-semibold text-white">{favorites.size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search for images..."
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                  {isSearching && (
                    <RefreshCw className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 animate-spin" />
                  )}
                </div>
              </div>

              {/* Current Category Badge (Mobile) */}
              <div className="lg:hidden">
                {(() => {
                  const category = categories.find(cat => cat.key === activeCategory);
                  if (!category) return null;
                  const Icon = category.icon;
                  return (
                    <Badge className={`bg-gradient-to-r ${category.color} text-white`}>
                      {typeof Icon === 'string' ? (
                        <span className="text-sm mr-1">{Icon}</span>
                      ) : (
                        <Icon className="w-3 h-3 mr-1" />
                      )}
                      {category.label}
                    </Badge>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="flex-1 p-4 lg:p-8">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div 
              className={`grid gap-6 animate-in slide-in-from-bottom duration-500 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {currentImages.map((imageUrl, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ImageCard 
                    imageUrl={imageUrl} 
                    index={index}
                    onToggleFavorite={toggleFavorite}
                    onDownload={downloadImage}
                    onOpen={openImage}
                    onSelect={setSelectedImage}
                    onCopyLink={copyImageLink}
                    isFavorite={favorites.has(imageUrl)}
                    isCopied={copiedLinks.has(imageUrl)}
                  />
                </div>
              ))}
            </div>
          )}

          {!loading && currentImages.length === 0 && (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No images found</p>
              {activeCategory === 'queryImages' && searchQuery && (
                <p className="text-gray-500 text-sm mt-2">Try searching for something else</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Modal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)}
          onCopyLink={copyImageLink}
          isCopied={copiedLinks.has(selectedImage)}
        />
      )}
    </div>
  );
};

export default GalleryPage;