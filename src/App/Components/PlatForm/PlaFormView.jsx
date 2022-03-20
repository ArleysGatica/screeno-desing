import './PLATFORM.css';

const PlatFormView = (props) => {
  const { info } = props;
  console.log("🚀 ", info)

  return (
    <main className="platform-view">
      <span className="container__platform">
        <h2>All-in-one platform</h2>
        <p id='sub-title'> You take care of the video quality and we take care of everything else.</p>
        <div className="platform-button">
          <button id="startPlatform">Start Free Trail</button>
          <button id="loginPlatform">Login</button>
        </div>
      </span>
      <setcion className="platform-view__container">
        {info.map((item, index) => {
          return (
            <article className="platform-view__item" key={index}>
              <div className="platform-view__item-svg">
                <img src={item.SVG} alt="svg" />
                <p className="platform-view__item-title">{item.title}</p>
              </div>
              <div className="platform-view__item-description">{item.description}</div>
            </article>
          )
        })}
      </setcion>
    </main>
  );
}
export default PlatFormView;