
import './Photos.css'
const PhotosView = (props) => {
  const { photos } = props;
  console.log("🚀 ~ ", photos)

  return (
    <div className="photos--main">

      <span className='item-info'>
        <h2>Famous live on our platform</h2>
        <p id='sub__title'>At the end of the day have fun with celebrities</p>
      </span>

      <div className="photos--container">
        {photos.map((photo, index) => {
          return (
            <div className="photos--item" key={index}>
              <img src={photo.img} alt="photo" />
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default PhotosView;