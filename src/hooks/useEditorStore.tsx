import { create } from 'zustand';

export const useEditorStore = create((set) => ({
    currentPage: null,
    currentLanguage: null,
    pages: null,
    languages: null,
    changePage: (page: any) => set({ currentPage: page }),
    changeLanguage: (language: any) => set({ currentLanguage: language }),
    setPages: (pages: any) => set({ pages, currentPage: pages?.[0] }),
    setLanguages: (languages: any) => set({ languages, currentLanguage: languages?.[0] }),
}));
