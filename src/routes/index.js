import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from '../pages/pageLayout';
import IndexPage from "../pages";
import CareerInsightPage from '../pages/landing/careerInsightPage';
import JobsFeedPage from "../pages/jobsfeed";
import WdListPage from '../pages/wdList';
import LoginPage from '../pages/auth/loginPage';
import RegisterPage from '../pages/auth/registerPage';
import PasswordPage from '../pages/auth/passwordPage';
import SearchResultPage from "../pages/wdList/searchResultPage";
import PositionListPage from "../pages/positionList";
import AuthPage from '../pages/auth';
import ProfileIndexPage from "../pages/profile";
import BookMarkPage from "../pages/profile/bookMarkPage";
import PositionInfoPage from "../pages/positionInfo";
import UserInfoPage from "../pages/userInfo";
import AdditionalInfoPage from "../pages/profile/additionalInfoPage";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route path="/" element={<IndexPage />} >
                        <Route path=":tagId" element={<CareerInsightPage />} />
                    </Route>
                    <Route path="companies/:companyId" element={<PositionListPage />} />
                    <Route path="position/:positionId" element={<PositionInfoPage />} />
                    <Route path="jobsfeed" element={<JobsFeedPage />} />
                    <Route path="wdlist" element={<WdListPage />} >
                        <Route path=":jobgroupId" element={<SearchResultPage />} />
                        <Route path=":jobgroupId/:jobId" element={<SearchResultPage />} />
                    </Route>
                    <Route path="profile" element={<ProfileIndexPage />} >
                        <Route path="userInfo" element={<UserInfoPage />} />
                        <Route path="bookmark" element={<BookMarkPage />} />
                        <Route path="additionalInfo" element={<AdditionalInfoPage />} />
                    </Route> 
                </Route>
                <Route path="/auth" element={<AuthPage />} >
                    <Route path="login" element={<LoginPage />} />
                    <Route path="login/password" element={<PasswordPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;