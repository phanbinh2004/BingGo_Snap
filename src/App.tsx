import { Route, Routes } from "react-router-dom";
// Auth
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
// Layout
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
// Pages
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  LikedPosts,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import "./global.css";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/liked-posts" element={<LikedPosts />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/update-post/:id" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
