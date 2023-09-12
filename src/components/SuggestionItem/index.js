import './index.css'

const SuggestionItem = ({suggestionItem, changeSearchInput}) => {
  const {suggestion} = suggestionItem
  const onArrow = () => {
    changeSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onArrow}
      />
    </li>
  )
}

export default SuggestionItem
