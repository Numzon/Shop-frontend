export const Paths = {
  ROOT: "/",
  HOME: "/",
  NOT_FOUND: "/",
  Authentication: {
    MAIN: "/authentication",
    SIGN_IN: "/authentication/sign-in",
    SIGN_UP: "/authentication/sign-up",
  },
  ManagmentCenter: {
    MAIN: "/managment-center",
  },
  Category: {
    MAIN: "/managment-center/category",
    NEW_CATEGORY: "/managment-center/category/new",
    EDIT_CATEGORY: "/managment-center/category/edit/:id",
  },
  SpecificationTypes: {
    SPECIFICATION_TYPES: "/managment-center/specification-types",
    NEW_SPECIFICATION_TYPES: "/managment-center/specification-types/new",
    EDIT_SPECIFICATION_TYPES: "/managment-center/specification-types/edit/:id",
  },
  SpecificationPatterns: {
    MAIN: "/managment-center/specification-patterns",
    NEW_SPECIFICATION_PATTERNS: "/managment-center/specification-patterns/new",
    EDIT_SPECIFICATION_PATTERNS:
      "/managment-center/specification-patterns/edit/:id",
  },
  UserAccount: {
    MAIN: "/user-account",
    ACCOUNT_SETTINGS: "/user-account/settings",
  },
  Product: {
    PRODUCT_DETAILS: "product/:id",
  },
  Cart: {
    CART_DETAILS: "cart-details",
  },
};
