export const POSTS = {
  LOADING: "POSTS_LOADING",
  LOAD_SUCCESS: "POSTS_LOAD_SUCCESS",
  ERROR: "POSTS_ERROR"
};

export const COMMENTS = {
  LOADING: "COMMENTS_LOADING",
  LOAD_ERROR: "COMMENTS_ERROR",
  LOAD_SUCCESS: "COMMENTS_LOAD_SUCCESS",
  ID_POST: "ID_POST_FOR_COMMENTS",
  SEND: "COMMENT_SEND",
  SENDING: "COMMENT_SENDING",
  SEND_ERROR: "COMMENT_SEND_ERROR",
  SEND_SUCCESS: "COMMENT_SEND_SUCCESS",
  DELETE_COMMENT: "COMMENT_DELETE",
  DELETE_SUCCESS: "COMMENT_DELETE_SUCCESS",
};

export const ERRORS = {
  GET_ERRORS: "ERRORS_GET_ERRORS",
  CLEAR_ERRORS: "ERRORS_CLEAR_ERRORS"
};

export const USER = {
  LOADING: "USER_LOADING",
  LOADED: "USER_LOADED",
  AUTH_ERROR: "USER_AUTH_ERROR",
  LOGIN: "USER_LOGIN",
  LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  LOGIN_FAIL: "USER_LOGIN_FAIL",
  REGISTER: "USER_REGISTER",
  REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
  REGISTER_FAIL: "USER_REGISTER_FAIL",
  LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS"
};
