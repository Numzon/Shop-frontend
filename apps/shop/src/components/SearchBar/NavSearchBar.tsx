import {
  Card,
  CardContent,
  Stack,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchBarItems } from "../../api/hooks/Product";
import { useState } from "react";
import { SearchBarItemDto } from "../../types";
import { useRouter } from "../../routes/hooks";
import { Paths } from "../../constants";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "640px",
    },
  },
}));

type SearchBarItemProps = SearchBarItemDto & {
  onClick?: () => void;
};

const SearchBarItem = ({
  id,
  name,
  isCategory,
  onClick,
}: SearchBarItemProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card
      onClick={() => {
        if (onClick) onClick();

        if (isCategory) {
          router.push("user-category-list/" + id);
        }
        router.push(Paths.Product.PRODUCT_DETAILS.replace(":id", id));
      }}
    >
      <CardContent
        sx={{
          padding: theme.spacing(1),
          ":last-child": { paddingBottom: theme.spacing(1) },
          textAlign: "left",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
        }}
      >
        {isCategory && "Search in category: "}
        {name}
      </CardContent>
    </Card>
  );
};

type SearchBarItemsListProps = {
  onClick?: () => void;
  searchBarItems: SearchBarItemDto[];
};

const SearchBarItemsList = ({
  searchBarItems,
  onClick,
}: SearchBarItemsListProps) => {
  if (!searchBarItems) {
    return null;
  }

  return (
    <Stack
      sx={{
        position: "absolute",
        width: "calc(1em + 32px + 8px + 640px)",
      }}
    >
      {searchBarItems.map((item, index) => (
        <SearchBarItem
          key={index}
          id={item.id}
          name={item.name}
          isCategory={item.isCategory}
          onClick={onClick}
        />
      ))}
    </Stack>
  );
};

export const NavSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: searchBarItems } = useSearchBarItems({
    searchString: searchValue,
    pageSize: "20",
  });

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <SearchBarItemsList
        searchBarItems={searchBarItems?.data ?? []}
        onClick={() => {
          setSearchValue("");
        }}
      />
    </Search>
  );
};

export default NavSearchBar;
