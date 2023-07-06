'use client'
import { useState, useEffect } from 'react';
import { ServiceStatus } from '../models/common.interface';

const useFetchData = (url: string) => {
  const [data, setData] = useState<any>();
  const [status, setStatus] = useState<ServiceStatus>('IDLE');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('LOADING');

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setStatus('SUCCESS');
      } catch (error) {
        console.error('Error fetching data:', error);
        setStatus('ERROR');
      }
    };

   typeof window !== 'undefined' &&  fetchData();
  }, [url]);

  return { data, status };
};

export default useFetchData;
