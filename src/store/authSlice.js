const authSlice = (set, get) => ({
  isLoggedIn: false,
  role: "",
  email: "",
  token: "",
  details: {},
  nseData: {},
  logIn: (role, email, token) => {
    set({ isLoggedIn: true, role, email, token })
  },
  logOut: () => {
    set({ role: "", isLoggedIn: false })
  },
  setDetails: (keyData, valueData) =>
    set((state) => ({
      details: {
        ...state.details,
        [keyData]: `${valueData}`,
      }
    })),
  setNseData: (keyData, valueData) =>
    set((state) => ({
      nseData: {
        ...state.nseData,
        [keyData]: `${valueData}`,
      }
    })),
  clearDetails: () =>
    set((state) => ({
      details: {}
    })),
  clearNseData: () =>
    set((state) => ({
      nseData: {}
    }))
})

export default authSlice