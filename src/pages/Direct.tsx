import Navbar from "../components/Navbar";

const Direct = () => {
  return (
    <>
      <Navbar />
      <section className="direct">
        <div className="direct-header">
          <p className="messages">Messages</p>
          <p className="requests">Requests</p>
        </div>
        <div className="containerr">
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                alt="lana"
              />
            </div>
            <div className="userName-bio">
              <div className="username">Lana Del Rey</div>
              <div className="bio">Cinnamon Girl</div>
            </div>
          </div>
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                alt="lana"
              />
            </div>
            <div className="userName-bio">
              <div className="username">Lana Del Rey</div>
              <div className="bio">Cinnamon Girl</div>
            </div>
          </div>
          <div className="my-direct-friend-box">
            <div className="user-img">
              <img
                src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                alt="lana"
              />
            </div>
            <div className="userName-bio">
              <div className="username">Lana Del Rey</div>
              <div className="bio">Cinnamon Girl</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Direct;
