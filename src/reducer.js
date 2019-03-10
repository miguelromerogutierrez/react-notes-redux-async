import { FETCH_USER, REGISTER_USER } from "./constants";

const initialState = {
  loading: false,
  model: null,
  error: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER.PENDING:
    case REGISTER_USER.PENDING:
      return { ...state, loading: true };
    case FETCH_USER.SUCCESS:
    case REGISTER_USER.SUCCESS:
      return { ...state, loading: false, model: action.payload };
    case FETCH_USER.ERROR:
    case REGISTER_USER.ERROR:
      return { loading: false, error: true, model: action.payload };
    default:
      return state;
  }
};

export default user;
