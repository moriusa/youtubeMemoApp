export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  user_id: string;
  youtube_id: string;
  title: string;
  thumbnail_url?: string;
  duration?: number;
  url: string;
  created_at: string;
  updated_at: string;
  memos?: Memo[];
}

export interface Memo {
  id: string;
  video_id: string;
  user_id: string;
  timestamp_seconds: number;
  content: string;
  category: MemoCategory;
  created_at: string;
  updated_at: string;
}

export type MemoCategory = 'general' | 'important' | 'idea' | 'learning';

export interface YouTubeVideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = unknown> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: string;
}

export interface CreateVideoRequest {
  youtube_url: string;
}

export interface CreateMemoRequest {
  video_id: string;
  timestamp_seconds: number;
  content: string;
  category: MemoCategory;
}

export interface UpdateMemoRequest {
  content?: string;
  category?: MemoCategory;
}

export interface VideoFilters {
  search?: string;
  category?: MemoCategory;
  sortBy?: 'created_at' | 'updated_at' | 'title';
  sortOrder?: 'asc' | 'desc';
}