import React, { useEffect } from 'react';
import axios from 'axios';
import { Props } from './interfaseProps';

const DataFetcher: React.FC<Props> = ({ url, onData, onError }) => {
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        onData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        onError({ message: error.message });
      });
  }, [url, onData, onError]);
  return null;
};
export default DataFetcher;
