import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Sidebar from "./components/layout/navigation/sidebar";
import Topbar from "./components/layout/navigation/topbar";
import ChallengePage from "./pages/challengePage";
import EventPage from "./pages/eventPage";
import GroupPage from "./pages/groupPage";
import FollowerPage from "./pages/followerPage";
import FollowingPage from "./pages/followingPage";
import LearnPage from "./pages/learnPage";
import ProfilePage from "./pages/profilePage";
import SavedPage from "./pages/savedPage";
import ResearchPage from "./pages/researchPage";
import ScientistsPage from "./pages/scientistsPage";

const SDG = "sdg1";

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <div>
        <Topbar sdg={SDG} />
        <div className="flex">
          <Sidebar sdg={SDG} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/challenge" element={<ChallengePage />} />
            <Route path="/groups" element={<GroupPage />} />
            <Route path="/follower" element={<FollowerPage />} />
            <Route path="/following" element={<FollowingPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/scientists" element={<ScientistsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
