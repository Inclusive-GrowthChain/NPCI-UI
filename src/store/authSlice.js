const authSlice = (set, get) => ({
  isLoggedIn: false,
  role: "",
  details: {},
  nseData: {},
  logIn: role => {
    set({ isLoggedIn: true, role })
  },
  logOut: () => {
    set({ role: "", isLoggedIn: false })
  },
  setDetails: (keyData, valueData) =>
    set((state) => ({
      details: {
        [keyData]: `${valueData}`,
        ...state.details,
      }
    })),
  setNseData: (data) => 
    set((state) => ({
      nseData: {
        data,
        ...state.nseData
      }
    }))
})

export default authSlice