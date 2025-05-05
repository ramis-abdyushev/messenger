import { memo, useEffect, useState } from 'react';
import { Input } from '../input/input';
import classes from './search-input.module.scss';
import { classNames, useDebounce } from 'shared/lib';

interface SearchInputProps {
  onChange: (value: string) => void;
  initialValue?: string;
  className?: string;
}

export const SearchInput = memo(function SearchInput(props: SearchInputProps) {
  const { onChange, initialValue = '', className } = props;

  const [query, setQuery] = useState(initialValue);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    onChange(debouncedQuery);
  }, [debouncedQuery, onChange]);

  return (
    <Input
      className={classNames([classes.searchInput, className])}
      value={query}
      onChange={setQuery}
    />
  );
});
