import { FETCH_USER, REGISTER_USER } from "./constants";
import { getUserByEmail, postRegisterUser } from "./services";

const setLoadingUser = () => ({ type: FETCH_USER.PENDING });
const setUser = payload => ({ type: FETCH_USER.SUCCESS, payload });
const setError = payload => ({ type: FETCH_USER.ERROR, payload });

const setLoadingRegistry = () => ({ type: REGISTER_USER.PENDING });
const setUserRegistered = payload => ({ type: REGISTER_USER.SUCCESS, payload });
const setErrorRegister = payload => ({ type: REGISTER_USER.ERROR, payload });

export const bindFetchUser = dispatch => async email => {
  try {
    dispatch(setLoadingUser());
    const resp = await getUserByEmail(email);
    dispatch(setUser(resp));
  } catch (err) {
    dispatch(setError(err));
  }
};

export const bindRegisterUser = dispatch => async (params) => {
  try {
    dispatch(setLoadingRegistry());
    const resp = await postRegisterUser(params);
    dispatch(setUserRegistered(resp));
  } catch (err) {
    dispatch(setErrorRegister(err));
  }
};
