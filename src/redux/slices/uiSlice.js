import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../utils/constants';

// Get initial theme from localStorage
const getInitialTheme = () => {
  return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: getInitialTheme(),
    loading: false,
    sidebarOpen: false,
    toast: {
      show: false,
      message: '',
      type: 'info', // 'success', 'error', 'info', 'warning'
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(STORAGE_KEYS.THEME, action.payload);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    showToast: (state, action) => {
      state.toast = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || 'info',
      };
    },
    hideToast: (state) => {
      state.toast.show = false;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setLoading,
  toggleSidebar,
  openSidebar,
  closeSidebar,
  showToast,
  hideToast,
} = uiSlice.actions;

// Selectors
export const selectTheme = (state) => state.ui.theme;
export const selectLoading = (state) => state.ui.loading;
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;
export const selectToast = (state) => state.ui.toast;

export default uiSlice.reducer;
