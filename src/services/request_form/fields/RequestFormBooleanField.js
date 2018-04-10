class RequestFormTextField {

  constructor(field, answer) {
    this.field = field;
    this.answer = answer;
  }

  to_s() {
    return `${this.field.title}: ${this.answer.boolean}`
  }
}
export default RequestFormTextField;