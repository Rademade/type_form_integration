import auto                        from 'async/auto';
import GetTypeFormRequestToData    from './actions/GetTypeFormRequestToData'
import FindOrCreatePipedrivePerson from './actions/FindOrCreatePipedrivePerson'
import FindPipelineStageForRequest from './actions/FindPipelineStageForRequest'
import CreatePipedriveDeal         from './actions/CreatePipedriveDeal'
import CreatePipedriveNote         from './actions/CreatePipedriveNote'
import SaveTypeFormRequest         from './actions/SaveTypeFormRequest'
import CreateJiraIssue             from './actions/CreateJiraIssue'
import SendEmailToResponsible      from './actions/SendEmailToResponsible'
import FormRequestFrom             from  '../../api/request_callback/model'

class TypeFormRequestTransaction {
  static call(requestBody, callback) {
    auto(
      {
        logRequest: SaveTypeFormRequest(requestBody),
        requestFormData: GetTypeFormRequestToData(requestBody),
        jiraIssue: CreateJiraIssue(),
        person: FindOrCreatePipedrivePerson(),
        stage: FindPipelineStageForRequest(),
        deal: CreatePipedriveDeal(),
        note: CreatePipedriveNote(),
        sendEmail: SendEmailToResponsible()
      }, (err, results) =>{
        let status = 'success';

        if(err)
          status = 'error';

        FormRequestFrom.findByIdAndUpdate(results.logRequest._id, { status: status }, {}, callback)
      }
    );
  }
}
export default TypeFormRequestTransaction;
