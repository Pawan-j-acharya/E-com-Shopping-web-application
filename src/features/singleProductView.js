import { create } from "zustand";

const useSingleProductStore = create((set) => ({
    product: {},
    status: 'idle',

    getSingleProduct: async (id) => {
      set({ status: 'loading' });
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonResponse = await response.json();
        set({ status: 'succeeded', product: jsonResponse });
      } catch (error) {
        set({ status: 'failed' });
        console.error('Error fetching single product:', error);
      }
    },

    setStatusIdle: () => set({ status: 'idle' }),
  }));
  
  export default useSingleProductStore;