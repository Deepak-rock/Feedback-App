// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelect: false}

  onClickFeedback = () => {
    this.setState({isFeedbackSelect: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-list">
          {emojis.map(emoji => (
            <li className="feedback-item" key={emoji.id}>
              <button
                className="emoji-btn"
                type="button"
                onClick={this.onClickFeedback}
              >
                <img className="emoji" src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-text">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelect} = this.state

    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackSelect
            ? this.renderFeedback()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
