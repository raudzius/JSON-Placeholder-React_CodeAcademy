import { useRef } from 'react';

interface SelectionProps {
  paginatePosts: (limit: number) => void;
}

export default function PaginationSelection({ paginatePosts }: SelectionProps) {
  const selectInputRef = useRef<HTMLSelectElement>(null);

  function handleChange() {
    paginatePosts(+selectInputRef.current!.value);
  }

  return (
    <select
      name='posts'
      id='posts'
      onChange={handleChange}
      ref={selectInputRef}
      defaultValue={25}
    >
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </select>
  );
}
