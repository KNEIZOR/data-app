import { EvenActionCreators } from "./event/action-creators";
import { AuthActionCreators } from "./auth/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EvenActionCreators,
};
