import * as React from 'react';
import styles from './SearchBox.module.scss';
import type { ISearchBoxProps } from './ISearchBoxProps';

export interface ISearchBoxState {
  query: string;
  searchCount: number;
}

export default class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
  constructor(props: ISearchBoxProps) {
    super(props);
    this.state = {
      query: '',
      searchCount: 0
    };
  }

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: e.target.value });
  };

  private handleSearch = (): void => {
    const { query } = this.state;
    if (query.trim()) {
      this.props.onSearch(query.trim());
      this.setState((prev) => ({ searchCount: prev.searchCount + 1 }));
    }
  };

  private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  public render(): React.ReactElement<ISearchBoxProps> {
    const { placeholder = 'Search...', buttonLabel = 'Search', disabled = false } = this.props;
    const { query, searchCount } = this.state;

    return (
      <div>
        <div className={`${styles.searchBox} ${disabled ? styles.disabled : ''}`}>
          <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            disabled={disabled}
            aria-label="Search input"
          />
          <button
            className={styles.button}
            onClick={this.handleSearch}
            disabled={disabled || !query.trim()}
            aria-label={buttonLabel}
          >
            {buttonLabel}
          </button>
        </div>
        {searchCount > 0 && (
          <div className={styles.resultCount}>
            Searches performed: {searchCount}
          </div>
        )}
      </div>
    );
  }
}
