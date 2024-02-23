import React from "react";
import {
  Blogs,
  Home,
  About,
  Contact,
  Login,
  Register,
  Tournament,
  Organise,
  Play,
  PlayId,
  OrganiseId,
  GameRegister,
  SingleBlog,
  Projects,
  OrganiseTournament,
  TournamentSetting,
  CreateProject,
  CreateTournament,
  OrganiseRegister,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-primary min-h-[100vh] w-full overflow-hidden">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/:id" element={<PlayId />} />
        <Route path="/gameregister/:id" element={<GameRegister />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/organise" element={<Organise />} />
        <Route path="/organise/:id" element={<Projects />} />
        <Route path="/organise/create" element={<CreateProject />} />
        <Route path="/organise/register" element={<OrganiseRegister />} />
        <Route path="/organise/tournament/:id" element={<OrganiseTournament />} />
        <Route
          path="/organise/tournaments/create/:id"
          element={<CreateTournament />}
        />
        <Route
          path="/organise/tournaments/:id"
          element={<TournamentSetting />}
        />
      </Routes>
    </div>
  );
};

export default App;
