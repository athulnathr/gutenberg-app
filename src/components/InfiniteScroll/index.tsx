

import React, { useEffect, useRef, useState, useCallback } from 'react';
import debounce from '../../utils/debounce';

interface InfiniteScrollProps {
  fetchData: (page: number) => Promise<any[]>;
  hasMore: boolean;
  loading: boolean;
  children: (items: any[]) => React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  fetchData,
  hasMore,
  loading,
  children,
}) => {
  const [items, setItems] = useState<any[]>([]);
  const pageRef = useRef(1);

  const loadItems = async () => {
    if (loading || !hasMore) return;

    const newItems = await fetchData(pageRef.current);
    setItems((prevItems) => [...prevItems, ...newItems]);
    pageRef.current += 1;
  };

  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) {
        loadItems();
      }
    }, 200), // Debounce time in milliseconds
    [loading, hasMore]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    loadItems(); // Load initial data

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Optional: If you create a cancel method
    };
  }, []);

  return <>{children(items)}</>;
};

export default InfiniteScroll;