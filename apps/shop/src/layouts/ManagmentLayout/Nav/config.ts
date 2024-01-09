import { Paths } from "../../../constants";
import CategoryIcon from "@mui/icons-material/Category";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import PatternIcon from "@mui/icons-material/Pattern";

type NavConfig = {
  title: string;
  path: string;
  Icon: React.ComponentType;
}[];

const navConfig: NavConfig = [
  {
    title: "Categories",
    path: Paths.CATEGORY,
    Icon: CategoryIcon,
  },
  {
    title: "Specification types",
    path: Paths.SPECIFICATION_TYPES,
    Icon: TypeSpecimenIcon,
  },
  {
    title: "Specification patterns",
    path: Paths.SPECIFICATION_PATTERNS,
    Icon: PatternIcon,
  },
];

export default navConfig;
