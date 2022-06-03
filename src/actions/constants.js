export const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "LOGOUT_FAILURE",
};

export const userConstants = {
  USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAILURE: "USER_REGISTER_FAILURE",
};

export const studentConstants = {
  GET_GROUP_DETAILS_REQUEST: "GET_GROUP_DETAILS_REQUEST",
  GET_GROUP_DETAILS_SUCCESS: "GET_GROUP_DETAILS_SUCCESS",
  GET_GROUP_DETAILS_FAILURE: "GET_GROUP_DETAILS_FAILURE",
  GET_ALL_GROUPS_DETAILS_REQUEST: "GET_ALL_GROUPS_DETAILS_REQUEST",
  GET_ALL_GROUPS_DETAILS_SUCCESS: "GET_ALL_GROUPS_DETAILS_SUCCESS",
  GET_ALL_GROUPS_DETAILS_FAILURE: "GET_ALL_GROUPS_DETAILS_FAILURE",
};

export const supervisorConstants = {
  GET_SUPERVISOR_DETAILS_REQUEST: "GET_SUPERVISOR_DETAILS_REQUEST",
  GET_SUPERVISOR_DETAILS_SUCCESS: "GET_SUPERVISOR_DETAILS_SUCCESS",
  GET_SUPERVISOR_DETAILS_FAILURE: "GET_SUPERVISOR_DETAILS_FAILURE",
  GET_STUDENT_ASSIGNMENT_BY_NAME_REQUEST:
    "GET_STUDENT_ASSIGNMENT_BY_NAME_REQUEST",
  GET_STUDENT_ASSIGNMENT_BY_NAME_SUCCESS:
    "GET_STUDENT_ASSIGNMENT_BY_NAME_SUCCESS",
  GET_STUDENT_ASSIGNMENT_BY_NAME_FAILURE:
    "GET_STUDENT_ASSIGNMENT_BY_NAME_FAILURE",
  GET_STUDENT_ASSIGNMENT_REQUEST: "GET_STUDENT_ASSIGNMENT_REQUEST",
  GET_STUDENT_ASSIGNMENT_SUCCESS: "GET_STUDENT_ASSIGNMENT_SUCCESS",
  GET_STUDENT_ASSIGNMENT_FAILURE: "GET_STUDENT_ASSIGNMENT_FAILURE",
  GET_STUDENT_ASSIGNMENTS_REQUEST: "GET_STUDENT_ASSIGNMENTS_REQUEST",
  GET_STUDENT_ASSIGNMENTS_SUCCESS: "GET_STUDENT_ASSIGNMENTS_SUCCESS",
  GET_STUDENT_ASSIGNMENTS_FAILURE: "GET_STUDENT_ASSIGNMENTS_FAILURE",
  EVALUATE_STUDENT_ASSIGNMENT_REQUEST: "EVALUATE_STUDENT_ASSIGNMENT_REQUEST",
  EVALUATE_STUDENT_ASSIGNMENT_SUCCESS: "EVALUATE_STUDENT_ASSIGNMENT_SUCCESS",
  EVALUATE_STUDENT_ASSIGNMENT_FAILURE: "EVALUATE_STUDENT_ASSIGNMENT_FAILURE",
};

export const submissionConstants = {
  ADD_SUBMISSION_REQUEST: "ADD_SUBMISSION_REQUEST",
  ADD_SUBMISSION_SUCCESS: "ADD_SUBMISSION_SUCCESS",
  ADD_SUBMISSION_FAILURE: "ADD_SUBMISSION_FAILURE",
  DELETE_SUBMISSION_REQUEST: "DELETE_SUBMISSION_REQUEST",
  DELETE_SUBMISSION_SUCCESS: "DELETE_SUBMISSION_SUCCESS",
  DELETE_SUBMISSION_FAILURE: "DELETE_SUBMISSION_FAILURE",
  GET_SUBMISSION_DETAILS_REQUEST: "GET_SUBMISSION_DETAILS_REQUEST",
  GET_SUBMISSION_DETAILS_SUCCESS: "GET_SUBMISSION_DETAILS_SUCCESS",
  GET_SUBMISSION_DETAILS_FAILURE: "GET_SUBMISSION_DETAILS_FAILURE",
  EDIT_SUBMISSION_DETAILS_REQUEST: "EDIT_SUBMISSION_DETAILS_REQUEST",
  EDIT_SUBMISSION_DETAILS_SUCCESS: "EDIT_SUBMISSION_DETAILS_SUCCESS",
  EDIT_SUBMISSION_DETAILS_FAILURE: "EDIT_SUBMISSION_DETAILS_FAILURE",
  GET_ONE_SUBMISSION_DETAIL_REQUEST: "GET_ONE_SUBMISSION_DETAIL_REQUEST",
  GET_ONE_SUBMISSION_DETAIL_SUCCESS: "GET_ONE_SUBMISSION_DETAIL_SUCCESS",
  GET_ONE_SUBMISSION_DETAIL_FAILURE: "GET_ONE_SUBMISSION_DETAIL_FAILURE",
  ADD_SUBMISSION_FILE_REQUEST: "ADD_SUBMISSION_FILE_REQUEST",
  ADD_SUBMISSION_FILE_SUCCESS: "ADD_SUBMISSION_FILE_SUCCESS",
  ADD_SUBMISSION_FILE_FAILURE: "ADD_SUBMISSION_FILE_FAILURE",
};

export const templateConstants = {
  GET_ALL_TEMPLATES_REQUEST: "GET_ALL_TEMPLATES_REQUEST",
  GET_ALL_TEMPLATES_SUCCESS: "GET_ALL_TEMPLATES_SUCCESS",
  GET_ALL_TEMPLATES_FAILURE: "GET_ALL_TEMPLATES_FAILURE",
};

export const topicConstants = {
  // GET_ALL_THEATER_REQUEST: "GET_ALL_THEATER_REQUEST",
  // GET_ALL_THEATER_SUCCESS: "GET_ALL_THEATER_SUCCESS",
  // GET_ALL_THEATER_FAILURE: "GET_ALL_THEATER_FAILURE",
  ADD_NEW_TOPIC_REQUEST: "ADD_NEW_TOPIC_REQUEST",
  ADD_NEW_TOPIC_SUCCESS: "ADD_NEW_TOPIC_SUCCESS",
  ADD_NEW_TOPIC_FAILURE: "ADD_NEW_TOPIC_FAILURE",
  GET_TOPICS_REQUEST: "GET_TOPICS_REQUEST",
  GET_TOPICS_SUCCESS: "GET_TOPICS_SUCCESS",
  GET_TOPICS_FAILURE: "GET_TOPICS_FAILURE",
  GET_TOPIC_REQUEST: "GET_TOPIC_REQUEST",
  GET_TOPIC_SUCCESS: "GET_TOPIC_SUCCESS",
  GET_TOPIC_FAILURE: "GET_TOPIC_FAILURE",
  GET_TOPIC_BY_USERID_REQUEST: "GET_TOPIC_BY_USERID_REQUEST",
  GET_TOPIC_BY_USERID_SUCCESS: "GET_TOPIC_BY_USERID_SUCCESS",
  GET_TOPIC_BY_USERID_FAILURE: "GET_TOPIC_BY_USERID_FAILURE",
};

export const panelConstants = {
  GET_ALL_PANEL_REQUEST: "GET_ALL_PANEL_REQUEST",
  GET_ALL_PANEL_SUCCESS: "GET_ALL_PANEL_SUCCESS",
  GET_ALL_PANEL_FAILURE: "GET_ALL_PANEL_FAILURE",
  GET_PANEL_REQUEST: "GET_PANEL_REQUEST",
  GET_PANEL_SUCCESS: "GET_PANEL_SUCCESS",
  GET_PANEL_FAILURE: "GET_PANEL_FAILURE",
};

export const staffConstants = {
  GET_STAFF_PANEL_REQUEST: "GET_STAFF_PANEL_REQUEST",
  GET_STAFF_PANEL_SUCCESS: "GET_STAFF_PANEL_SUCCESS",
  GET_STAFF_PANEL_FAILURE: "GET_STAFF_PANEL_FAILURE",
};

export const memberConstants = {
  MEMBER_REGISTER_REQUEST: "MEMBER_REGISTER_REQUEST",
  MEMBER_REGISTER_SUCCESS: "MEMBER_REGISTER_SUCCESS",
  MEMBER_REGISTER_FAILURE: "MEMBER_REGISTER_FAILURE",
  GET_MEMBER_REQUEST: "GET_MEMBER_REQUEST",
  GET_MEMBER_SUCCESS: "GET_MEMBER_SUCCESS",
  GET_MEMBER_FAILURE: "GET_MEMBER_FAILURE",
};

export const memebersConstants = {
  GET_ALL_MEMBERS_REQUEST: "GET_ALL_MEMBERS_REQUEST",
  GET_ALL_MEMBERS_SUCCESS: "GET_ALL_MEMBERS_SUCCESS",
  GET_ALL_MEMBERS_FAILURE: "GET_ALL_MEMBERS_FAILURE",
  GET_ALL_STAFF_MEMBERS_REQUEST: "GET_ALL_STAFF_MEMBERS_REQUEST",
  GET_ALL_STAFF_MEMBERS_SUCCESS: "GET_ALL_STAFF_MEMBERS_SUCCESS",
  GET_ALL_STAFF_MEMBERS_FAILURE: "GET_ALL_STAFF_MEMBERS_FAILURE",
  GET_ALL_SUPERVISORS_REQUEST: "GET_ALL_SUPERVISORS_REQUEST",
  GET_ALL_SUPERVISORS_SUCCESS: "GET_ALL_SUPERVISORS_SUCCESS",
  GET_ALL_SUPERVISORS_FAILURE: "GET_ALL_SUPERVISORS_FAILURE",
};

export const markingSchemaConstants = {
  ADD_NEW_MARKING_SCHEME_REQUEST: "ADD_NEW_MARKING_SCHEME_REQUEST",
  ADD_NEW_MARKING_SCHEME_SUCCESS: "ADD_NEW_MARKING_SCHEME_SUCCESS",
  ADD_NEW_MARKING_SCHEME_FAILURE: "ADD_NEW_MARKING_SCHEME_FAILURE",
  GET_ALL_MARKING_SCHEME_REQUEST: "GET_ALL_MARKING_SCHEME_REQUEST",
  GET_ALL_MARKING_SCHEME_SUCCESS: "GET_ALL_MARKING_SCHEME_SUCCESS",
  GET_ALL_MARKING_SCHEME_FAILURE: "GET_ALL_MARKING_SCHEME_FAILURE",
  DELETE_MARKING_SCHEME_REQUEST: "DELETE_MARKING_SCHEME_REQUEST",
  DELETE_MARKING_SCHEME_SUCCESS: "DELETE_MARKING_SCHEME_SUCCESS",
  DELETE_MARKING_SCHEME_FAILURE: "DELETE_MARKING_SCHEME_FAILURE",
  GET_MARKING_SCHEME_REQUEST: "GET_MARKING_SCHEME_REQUEST",
  GET_MARKING_SCHEME_SUCCESS: "GET_MARKING_SCHEME_SUCCESS",
  GET_MARKING_SCHEME_FAILURE: "GET_MARKING_SCHEME_FAILURE",
};
