export interface Author {
  name: string;
  isOfficial?: boolean;
  avatar: string;
}

export interface StoryUser {
  userInfo: Author;
  isLive?: boolean;
  isAdd?: boolean;
  isRead?: boolean;
}
