import { memo } from "react";
import { Box } from "@mui/material";
import { SxProps, alpha, styled } from "@mui/material/styles";
import SimpleBar from "simplebar-react";

const StyledRootScrollBar = styled("div")({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));

type ScrollBarProps = {
  children: React.ReactNode;
  sx?: SxProps;
};

function ResponsiveScrollBar({ children, sx }: ScrollBarProps) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return <Box sx={{ overflowX: "auto", ...sx }}>{children}</Box>;
  }

  return (
    <StyledRootScrollBar>
      <StyledScrollBar clickOnTrack={false} sx={sx}>
        {children}
      </StyledScrollBar>
    </StyledRootScrollBar>
  );
}

const ScrollBar = memo(ResponsiveScrollBar);

export default ScrollBar;
