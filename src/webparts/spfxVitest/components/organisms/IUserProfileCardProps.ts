export interface IUserProfileCardProps {
  displayName: string;
  email: string;
  role: string;
  avatarInitials?: string;
  isOnline?: boolean;
  recentSearches?: string[];
  onSearch?: (query: string) => void;
}
