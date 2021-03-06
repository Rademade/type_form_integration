import RequestFormNullField from './RequestFormNullField'

class RequestFormMultipleChoiceField extends RequestFormNullField {

  getValue() {
    if (this.answer.choice)
      return `${this.answer.choice.label}`
    else
      return `${this.answer.choices.labels.join('\r\n')}`
  }

  to_s() {
    if (this.answer.choice)
      return `${this.field.title}: ${this.answer.choice.label}`
    else
      return `${this.field.title}: ${this.answer.choices.labels.join('\r\n')}`

  }
}
export default RequestFormMultipleChoiceField;
