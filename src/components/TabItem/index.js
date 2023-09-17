import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-card">
      <button className="tab-button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
