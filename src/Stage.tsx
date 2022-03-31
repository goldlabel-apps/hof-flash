// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Box } from "@mui/material";

export default function Stage() {
  const { useAppSelector, selectAppState } = shared;

  const appState = useAppSelector(selectAppState);
  // const ticking = useAppSelector(selectTicking);
  // console.warn("ticking", ticking);
  const { flash } = appState;
  // console.warn ("flash", flash);

  return (
    <Box sx={{ border: "1px solid #ccc" }}>
      <pre>{JSON.stringify(flash, null, 2)}</pre>
    </Box>
  );
}
