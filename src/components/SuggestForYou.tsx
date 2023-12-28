import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const SuggestForYou = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={10} style={{ margin: "auto" }}>
            <div className="suggest-for-you">
              <div className="containerr">
                <div className="suggested-user">
                  <div className="about-user">
                    <div className="user-img">
                      <img
                        src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                        alt="lana"
                      />
                    </div>
                    <div className="userName-follower">
                      <div className="username">Lana Del Rey</div>
                      <div className="follower-count">100k</div>
                    </div>
                  </div>
                  <div className="follow-btn">Follow</div>
                </div>
                <div className="suggested-user">
                  <div className="about-user">
                    <div className="user-img">
                      <img
                        src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                        alt="lana"
                      />
                    </div>
                    <div className="userName-follower">
                      <div className="username">Lana Del Rey</div>
                      <div className="follower-count">100k</div>
                    </div>
                  </div>
                  <div className="follow-btn">Follow</div>
                </div>
                <div className="suggested-user">
                  <div className="about-user">
                    <div className="user-img">
                      <img
                        src="https://i.pinimg.com/564x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
                        alt="lana"
                      />
                    </div>
                    <div className="userName-follower">
                      <div className="username">Lana Del Rey</div>
                      <div className="follower-count">100k</div>
                    </div>
                  </div>
                  <div className="follow-btn">Follow</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SuggestForYou;
