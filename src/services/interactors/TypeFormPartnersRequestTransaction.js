import auto                             from 'async/auto';
import GetTypeFormPartnersRequestToData from './actions/GetTypeFormPartnersRequestToData'
import FindOrCreatePipedrivePerson      from './actions/FindOrCreatePipedrivePerson'
import FindPipelineStageForRequest      from './actions/FindPipelineStageForRequest'
import CreatePipedriveDeal              from './actions/CreatePipedriveDeal'
import CreatePipedriveNote              from './actions/CreatePipedriveNote'
import SaveTypeFormPartnersRequest      from './actions/SaveTypeFormPartnersRequest'
import CreateJiraIssue                  from './actions/CreateJiraIssue'
import SendEmailToResponsible           from './actions/SendEmailToResponsible'
import SetPipedriveAssigneeUser         from './actions/SetPipedriveAssigneeUser'

class TypeFormPartnersRequestTransaction {
  static call(requestBody, callback) {
    auto(
      {
        logRequest: SaveTypeFormPartnersRequest(requestBody),
        requestFormData: GetTypeFormPartnersRequestToData(requestBody),
        pipedriveAssigneeUser: SetPipedriveAssigneeUser(),
        jiraIssue: CreateJiraIssue(),
        person: FindOrCreatePipedrivePerson(),
        // stage: FindPipelineStageForRequest(),
        deal: CreatePipedriveDeal(),
        note: CreatePipedriveNote(),
        sendEmail: SendEmailToResponsible()
      }, callback
    );
  }
}
export default TypeFormPartnersRequestTransaction;

