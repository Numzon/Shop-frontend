import { Routes, Route } from "react-router-dom";
import { Paths } from "../constants/paths";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NavigationLayout from "../layouts/NavigationLayout";
import ManagmentLayout from "../layouts/ManagmentLayout";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import AddCategoryPage from "../pages/AddCategory/AddCategoryPage";
import EditCategoryPage from "../pages/EditCategory/EditCategoryPage";
import SpecificationTypePage from "../pages/SpecificationTypes/SpecificationTypesPage";
import AddSpecificationTypePage from "../pages/AddSpecificationType";
import EditSpecificationTypePage from "../pages/EditSpecificationType";
import SpecificationPatternsPage from "../pages/SpecificationPatterns";
import AddSpecificationPatternPage from "../pages/AddSpecificationPattern";
import EditSpecificationPatternPage from "../pages/EditSpecificationPattern";
import Authorized from "../components/Authorized";
import Unauthorized from "../components/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.AUTHENTICATION} element={<Unauthorized />}>
        <Route path={Paths.AUTHENTICATION}>
          <Route path={Paths.SIGN_IN} element={<SignInPage />}></Route>
          <Route path={Paths.SIGN_UP} element={<SignUpPage />}></Route>
        </Route>
      </Route>

      <Route path={Paths.ROOT} element={<NavigationLayout />}>
        <Route path={Paths.HOME}></Route>
      </Route>

      <Route path={Paths.MANAGMENT_CENTER} element={<Authorized />}>
        <Route path={Paths.MANAGMENT_CENTER} element={<ManagmentLayout />}>
          <Route path={Paths.CATEGORY} element={<CategoriesPage />}></Route>
          <Route
            path={Paths.NEW_CATEGORY}
            element={<AddCategoryPage />}
          ></Route>
          <Route
            path={Paths.EDIT_CATEGORY}
            element={<EditCategoryPage />}
          ></Route>
          <Route
            path={Paths.SPECIFICATION_TYPES}
            element={<SpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.NEW_SPECIFICATION_TYPES}
            element={<AddSpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.EDIT_SPECIFICATION_TYPES}
            element={<EditSpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.SPECIFICATION_PATTERNS}
            element={<SpecificationPatternsPage />}
          ></Route>
          <Route
            path={Paths.NEW_SPECIFICATION_PATTERNS}
            element={<AddSpecificationPatternPage />}
          ></Route>
          <Route
            path={Paths.EDIT_SPECIFICATION_PATTERNS}
            element={<EditSpecificationPatternPage />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
