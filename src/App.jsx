import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/layouts/RootLayout"
import About from "./components/pages/About"
import AllFruit from "./components/pages/AllFruit"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import Profile from "./components/pages/Profile"

function App() {
  console.log("process.env.PORT: ", process.env.PORT)
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fruit" element={<AllFruit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App