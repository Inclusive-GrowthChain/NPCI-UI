const authSlice = (set, get) => ({
  isLoggedIn: false,
  logIn: () => {
    set({ isLoggedIn: true })
  },
  logOut: () => {
    set({ isLoggedIn: false })
  },
})

export default authSlice