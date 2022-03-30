// @ts-ignore
import * as shared from "@listingslab/shared";
// @ts-ignore
import { Box } from "@mui/material";

export default function Stage() {

  const {   
    useAppSelector,
    selectAppState, 
  } = shared;

  console.warn ("useAppSelector", useAppSelector());

  // const appState = useAppSelector(selectAppState);
  // console.warn ("appState", appState);

  return <Box sx={{ border: "1px solid #ccc" }}>
              Stage 
        </Box>;
}
