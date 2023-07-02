import { get, writable } from 'svelte/store';

export const User = (function () {
  const { subscribe, set } = writable({
    isAuthenticated: false,
    login: '',
  });
  return {
    subscribe,
    //   signout: () => {
    //     set(null);
    //   },
    signIn: (user) => {
      set(user);
      //set('John');
    },
  };
})();
// export const isAuthenticated = writable(false);
// export const userName = writable('');
// export const getValue = (val) => {
//   return get(val);
// };
