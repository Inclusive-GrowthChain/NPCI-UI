const authSlice = (set, get) => ({
  isLoggedIn: false,
  role: "",
  logIn: role => {
    set({ isLoggedIn: true, role })
  },
  logOut: () => {
    set({ role: "", isLoggedIn: false })
  },
})

export default authSlice