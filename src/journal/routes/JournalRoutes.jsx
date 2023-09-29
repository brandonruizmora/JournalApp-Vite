import { Navigate, Route, Routes } from "react-router-dom"
import { JournalView } from "../views/JournalView"

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalView />} />

        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
