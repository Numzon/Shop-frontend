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
import UserAccountLayout from "../layouts/UserAccountLayout";
import AccountSettingsPage from "../pages/AccountSettings/AccountSettingsPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import CartDetailsPage from "../pages/CartDetails/CartDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.Authentication.MAIN} element={<Unauthorized />}>
        <Route path={Paths.Authentication.MAIN}>
          <Route
            path={Paths.Authentication.SIGN_IN}
            element={<SignInPage />}
          ></Route>
          <Route
            path={Paths.Authentication.SIGN_UP}
            element={<SignUpPage />}
          ></Route>
        </Route>
      </Route>

      <Route path={Paths.ROOT} element={<NavigationLayout />}>
        <Route path={Paths.HOME}></Route>
        <Route
          path={Paths.Product.PRODUCT_DETAILS}
          element={<ProductDetailsPage />}
        ></Route>
        <Route
          path={Paths.Cart.CART_DETAILS}
          element={<CartDetailsPage />}
        ></Route>
        <Route path={Paths.UserAccount.MAIN} element={<UserAccountLayout />}>
          <Route
            path={Paths.UserAccount.ACCOUNT_SETTINGS}
            element={<AccountSettingsPage />}
          ></Route>
        </Route>
      </Route>

      <Route path={Paths.ManagmentCenter.MAIN} element={<Authorized />}>
        <Route path={Paths.ManagmentCenter.MAIN} element={<ManagmentLayout />}>
          <Route
            path={Paths.Category.MAIN}
            element={<CategoriesPage />}
          ></Route>
          <Route
            path={Paths.Category.NEW_CATEGORY}
            element={<AddCategoryPage />}
          ></Route>
          <Route
            path={Paths.Category.EDIT_CATEGORY}
            element={<EditCategoryPage />}
          ></Route>
          <Route
            path={Paths.SpecificationTypes.SPECIFICATION_TYPES}
            element={<SpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.SpecificationTypes.NEW_SPECIFICATION_TYPES}
            element={<AddSpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.SpecificationTypes.EDIT_SPECIFICATION_TYPES}
            element={<EditSpecificationTypePage />}
          ></Route>
          <Route
            path={Paths.SpecificationPatterns.MAIN}
            element={<SpecificationPatternsPage />}
          ></Route>
          <Route
            path={Paths.SpecificationPatterns.NEW_SPECIFICATION_PATTERNS}
            element={<AddSpecificationPatternPage />}
          ></Route>
          <Route
            path={Paths.SpecificationPatterns.EDIT_SPECIFICATION_PATTERNS}
            element={<EditSpecificationPatternPage />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
