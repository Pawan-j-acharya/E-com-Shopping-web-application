import {create} from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  subtotal: 0,
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
      subtotal: state.subtotal + item.price * item.quantity,
    })),
  deleteItem: (productId, price) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
      subtotal: state.subtotal - price,
    })),
}));

export default useCartStore;
