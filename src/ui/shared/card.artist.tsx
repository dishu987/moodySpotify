import { Button } from "@mui/material";
import "./card.album.css";
import imga from "./../../assets/search-bg.jpg";

const ArtistCard = ({ artist }: any) => {
  return (
    <div className="row main-content">
      {/* CARD 2 - Premium Individual */}
      <div className="card pinot-noir">
        <div className="card-content">
          <div className="row">
            <div className="plan-name">
              <img
                src={artist?.images[1]?.url ? artist?.images[1]?.url : imga}
                alt="albm_img"
                srcSet={artist?.images[1]?.url ? artist?.images[1]?.url : imga}
              />
            </div>
            <div className="col-4 plan-cost">
              <p className="plan-amount">
                <strong>{artist?.name}</strong>
              </p>
              <p className="plan-duration">
                {artist?.genres?.map((gen: any) => {
                  return gen;
                })}
              </p>
            </div>
          </div>
          <div
            className="row description content"
            style={{ marginTop: "20px" }}
          >
            <div className="col-sm-12">
              {numberToMillionsString(artist?.followers?.total)} Followers
            </div>
          </div>
          <div className="row content" style={{ marginTop: "10px" }}>
            <Button className="divButton" fullWidth>
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;

function numberToMillionsString(number: number) {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(1);
    return millions + "M";
  }
  return number.toString();
}
