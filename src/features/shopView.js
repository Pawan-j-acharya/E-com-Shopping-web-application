import { create } from "zustand";

const useShopStore = create((set) => ({
    data: [],
    status: 'idle',
    getAllProducts: async () => {
      set({ status: 'loading' });
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonResponse = await response.json();
        set({ status: 'succeeded', data: jsonResponse });
      } catch (error) {
        set({ status: 'failed' });
        console.error('Error fetching products:', error);
      }
    },
  }));
  
  export default useShopStore;