import dataFetchReducer from "../redux/reducer/dataFetchReducer";
import { useState, useReducer, useEffect } from "react";
import axios   from "axios";

const loadData = (initialUrl, initialData) => {
    // const [url, setUrl] = useState(initialUrl);
  
    // const [state, dispatch] = useReducer(dataFetchReducer, {
    //   isLoading: false,
    //   isError: false,
    //   data: initialData,
    // });
  
    // useEffect(() => {
    //   let didCancel = false;
  
    //   const fetchData = async () => {
    //     dispatch({ type: 'FETCH_INIT' });
  
    //     try {
    //       const result = await axios(url);
  
    //       if (!didCancel) {
    //         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    //       }
    //     } catch (error) {
    //       if (!didCancel) {
    //         dispatch({ type: 'FETCH_FAILURE' });
    //       }
    //     }
    //   };
  
    //   fetchData();
  
    //   return () => {
    //     didCancel = true;
    //   };
    // }, [url]);
  
    // return [state, setUrl];
  };

  export default loadData;