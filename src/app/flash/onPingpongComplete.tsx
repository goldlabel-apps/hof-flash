// @ts-nocheck
import { AppThunk } from "../../../app/store";
import { setFlashError } from "../";
// import { init } from "../ActionScript";
export const onPingpongComplete =
  (payload: any): AppThunk =>
  async (dispatch: any) => {
    try {
      //   init();

      console.error(`###### Thing`);

      //   dispatch(
      //     setShared({
      //       initted: true,
      //     })
      //   );
    } catch (error) {
      dispatch(setFlashError(error));
    }
  };
