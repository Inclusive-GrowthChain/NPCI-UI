const authSlice = (set, get) => ({
  isLoggedIn: false,
  logIn: () => {
    set({ isLoggedIn: true })
  },
})

export default authSlice