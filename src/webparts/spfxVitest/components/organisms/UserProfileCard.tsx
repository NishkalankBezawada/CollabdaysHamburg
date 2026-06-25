import * as React from 'react';
import styles from './UserProfileCard.module.scss';
import type { IUserProfileCardProps } from './IUserProfileCardProps';
import SearchBox from '../molecules/SearchBox';

export interface IUserProfileCardState {
  searches: string[];
}

export default class UserProfileCard extends React.Component<IUserProfileCardProps, IUserProfileCardState> {
  constructor(props: IUserProfileCardProps) {
    super(props);
    this.state = {
      searches: props.recentSearches || []
    };
  }

  private getInitials(): string {
    if (this.props.avatarInitials) {
      return this.props.avatarInitials;
    }
    return this.props.displayName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  private handleSearch = (query: string): void => {
    this.setState((prev) => ({
      searches: [query, ...prev.searches].slice(0, 5)
    }));
    if (this.props.onSearch) {
      this.props.onSearch(query);
    }
  };

  public render(): React.ReactElement<IUserProfileCardProps> {
    const { displayName, email, role, isOnline = false } = this.props;
    const { searches } = this.state;

    return (
      <div className={styles.profileCard} data-testid="profile-card">
        <div className={styles.header}>
          <div className={styles.avatar} aria-label="User avatar">
            {this.getInitials()}
          </div>
          <div className={styles.userInfo}>
            <h3 className={styles.displayName}>
              {displayName}
              <span
                className={`${styles.statusBadge} ${isOnline ? styles.online : styles.offline}`}
                aria-label={isOnline ? 'Online' : 'Offline'}
              />
            </h3>
            <p className={styles.email}>{email}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </div>

        <div className={styles.searchSection}>
          <SearchBox
            placeholder="Search user content..."
            buttonLabel="Find"
            onSearch={this.handleSearch}
          />
        </div>

        {searches.length > 0 && (
          <div className={styles.recentSearches}>
            <h4>Recent Searches</h4>
            <ul>
              {searches.map((search, index) => (
                <li key={index}>{search}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
