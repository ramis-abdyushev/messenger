import { memo, useEffect, useState } from 'react';
import { TextField } from '../text-field/text-field';
import classes from './search-field.module.scss';
import { classNames, useDebounce } from 'shared/lib';

interface SearchFieldProps {
  onChange: (value: string) => void;
  initialValue?: string;
  className?: string;
}

export const SearchField = memo(function SearchField(props: SearchFieldProps) {
  const { onChange, initialValue = '', className } = props;

  const [query, setQuery] = useState(initialValue);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    onChange(debouncedQuery);
  }, [debouncedQuery, onChange]);

  return (
    <TextField
      className={classNames([classes.searchInput, className])}
      value={query}
      onChange={setQuery}
    />
  );
});
