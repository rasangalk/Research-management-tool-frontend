import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import studentReducer from "./student.reducers";
import submissionReducer from "./submission.reducers";
import templateReducer from "./template.reducers";
import submissionByIdReducer from "./submissionById.reducers";
import membersReducer from "./members.reducers";
import panelReducer from "./panels.reducers";
import markingSchemasReducer from "./markingSchemas.reducers";
import supervisorReducer from "./supervisor.reducer";
import topicReducer from "./topic.reducer";
import markingSchemaByIDReducer from "./markingSchemaByID.reducers";
import studentSubmissionByNameReducer from "./studentSubmissionByName.reducers";
import studentSubmissionReducer from "./studentSubmission.reducers";
import studentSubmissionsReducer from "./studentSubmissions.reducers";
import staffReducer from "./staff.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  students: studentReducer,
  templates: templateReducer,
  submissions: submissionReducer,
  submissionByID: submissionByIdReducer,
  members: membersReducer,
  panels: panelReducer,
  markingSchemas: markingSchemasReducer,
  supervisor: supervisorReducer,
  topics: topicReducer,
  markingSchema: markingSchemaByIDReducer,
  submission: studentSubmissionByNameReducer,
  assignment: studentSubmissionReducer,
  allSubmissions: studentSubmissionsReducer,
  staff: staffReducer,
});

export default rootReducer;
