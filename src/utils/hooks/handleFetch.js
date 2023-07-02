import axios from 'axios';

// export const handleFetch = (callback) => {
//   let result = { isLoading: false, errorMessage: '', callback: null };

//   const fetching = async () => {
//     try {
//       result.isLoading = true;
//       await callback();
//     } catch (e) {
//       result.errorMessage = e.message;
//       setError(e.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return result;
// };

export const handleGet = async (callback) => {
  let result = {};
  try {
    let data = await axios.get(url, { withCredentials: true });
  } catch (e) {}

  return result;
};

export const handlePost = async (url, body) => {
  let result = {};
  try {
    let data = await axios.post(url, body, { withCredentials: true });
  } catch (e) {}

  return result;
};

// export const useFetching = (callback) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetching = async () => {
//     try {
//       setIsLoading(true);
//       await callback();
//     } catch (e) {
//       setError(e.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return [fetching, isLoading, error];
// };

// const [fetchPosts, isPostLoading, error] = useFetching(async () => {
//   const response = await PostService.getAll(
//     pagination.limit,
//     pagination.pageNumber,
//   );
//   setPosts(response.data);
//   setTotalCount(response.headers['x-total-count']);
// });

// //const [isPostLoading, setIsPostLoading] = useState(false);
// useEffect(() => {
//   fetchPosts();
// }, []);
