import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { AddAccount, Help, Logout, Main, Profile, ResetPassword } from "./page";
import { Homapage } from "./page/DataManagement";
import { Information } from "./page/DataManagement/information";
import { Overview, Overviews } from "./page/Overview";
import { IndexSetting, ServicePakage, ServiceSetting } from "./page/Setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Main />} />
        <Route path="homepagedata" element={<Homapage />} />
        <Route path="homepagedata/Infomation/:Id" element={<Information />} />
        <Route path="indexsetting" element={<IndexSetting />} />
        <Route path="servicesetting" element={<ServiceSetting />} />
        <Route path="servicepackage" element={<ServicePakage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addacount" element={<AddAccount />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="help" element={<Help />} />
        <Route path="logout" element={<Logout />} />
        <Route path="tongquan" element={<Overview />} />
        <Route path="/tongquan/:Id" element={<Overviews />} />
      </Route>
    </Routes>
  );
}

export default App;
