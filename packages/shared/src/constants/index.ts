export const MEMO_CATEGORIES = {
  general: 'General',
  important: 'Important',
  idea: 'Idea',
  learning: 'Learning'
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    USER: '/api/auth/user',
    LOGOUT: '/api/auth/logout'
  },
  VIDEOS: {
    BASE: '/api/videos',
    YOUTUBE: '/api/videos/youtube',
    BY_ID: (id: string) => `/api/videos/${id}`
  },
  MEMOS: {
    BY_VIDEO: (videoId: string) => `/api/videos/${videoId}/memos`,
    BY_ID: (id: string) => `/api/memos/${id}`
  }
} as const;

export const YOUTUBE_PLAYER_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
} as const;

export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100
} as const;

export const VALIDATION_RULES = {
  MEMO_CONTENT: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 1000
  },
  VIDEO_TITLE: {
    MAX_LENGTH: 500
  },
  USER_NAME: {
    MAX_LENGTH: 255
  }
} as const;

export const ERROR_MESSAGES = {
  INVALID_YOUTUBE_URL: 'Invalid YouTube URL',
  UNAUTHORIZED: 'Unauthorized access',
  VIDEO_NOT_FOUND: 'Video not found',
  MEMO_NOT_FOUND: 'Memo not found',
  INVALID_TIMESTAMP: 'Invalid timestamp',
  CONTENT_TOO_LONG: 'Content is too long',
  CONTENT_REQUIRED: 'Content is required',
  NETWORK_ERROR: 'Network error occurred'
} as const;