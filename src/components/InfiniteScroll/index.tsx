

import React, { useEffect, useRef, useState, useCallback } from 'react';
import debounce from '../../utils/debounce';

interface InfiniteScrollProps {
  fetchData: (page: number) => Promise<any[]>;
  hasMore: boolean;
  loading: boolean;
  children: (items: any[]) => React.ReactNode;
  reset:any
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  fetchData,
  hasMore,
  loading,
  children,
  reset
}) => {
  const [items, setItems] = useState<any[]>([]);
  const pageRef = useRef(1);

  const loadItems = async () => {
    if (loading || !hasMore) return;

    const newItems = await fetchData(pageRef.current);
    setItems((prevItems) => [...prevItems, ...newItems]);
    pageRef.current += 1;
  };

  const resetItems = async () => {
    const freshItems = await fetchData(1);
    setItems([...freshItems]);
    pageRef.current = 1;
  }

  useEffect(() => {
    resetItems();
  },[reset])

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
      handleScroll.cancel(); // Cancel the Debounce. Beneficial for Detaching the Listener
    };
  }, []);

  return <>{children(items)}</>;
};

export default InfiniteScroll;