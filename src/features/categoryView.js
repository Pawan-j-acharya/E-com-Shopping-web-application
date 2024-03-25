import { create } from 'zustand';

const useCategoryStore = create((set) => ({
  data: [],
  status: 'idle',

  getSingleCategory: async (slug) => {
    set({ status: 'loading' });
    try {
      // Custom Slugs
      switch (slug) {
        case "women's-clothing":
          slug = "women's%20clothing";
          break;
        case "men's-clothing":
          slug = "men's%20clothing";
          break;
      }
      // End of Custom slugs

      let url = `https://fakestoreapi.com/products/category/${slug}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();
      set({ data: jsonResponse, status: 'succeeded' });
    } catch (error) {
      set({ status: 'failed' });
      console.error('Error fetching category:', error);
    }
  },
}));

export default useCategoryStore;
