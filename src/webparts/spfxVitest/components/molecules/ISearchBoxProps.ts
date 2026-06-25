export interface ISearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  buttonLabel?: string;
  disabled?: boolean;
}
