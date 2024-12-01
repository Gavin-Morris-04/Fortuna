import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatment/IncomeStatement";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "search", element: <SearchPage />},
            {path: "", element: <HomePage />},
            {
                path: "company/:ticker", 
                element: <CompanyPage />,
                children: [
                    { path: "company-profile", element: <CompanyProfile />},
                    { path: "income-statement", element: <IncomeStatement />},
                ],
            },
        ] 
    }
])