import './index.css'

const Thumbnails = props => {
  const {thumbnailDetails, getRandomImage} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onMatchImage = () => {
    getRandomImage(id)
  }

  return (
    <li>
      <button className="thumbnail-button" type="button" onClick={onMatchImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default Thumbnails
