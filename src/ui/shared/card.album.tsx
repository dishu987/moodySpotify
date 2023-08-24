import { Button } from "@mui/material";
import "./card.album.css";
import { Link, Navigate } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const AlbumCard = ({ album }: any) => {
  const handleButtonClick = () => {
    // Return the Navigate component within your JSX structure
    return <Navigate to="/albums/falnkgegna" />;
  };

  return (
    <div className="row main-content">
      {/* CARD 2 - Premium Individual */}
      <div className="card pinot-noir">
        <div className="card-content">
          <div className="row">
            <div className="plan-name">
              <img
                src={album?.images[1].url}
                alt="albm_img"
                srcSet={album?.images[1].url}
              />
            </div>
            <div className="col-4 plan-cost">
              <p className="plan-amount">
                <strong>{album?.artists[0]?.name}</strong>
              </p>
              <p className="plan-duration">{album?.release_date}</p>
            </div>
          </div>
          <div className="row description content">
            <div className="col-sm-12">{album?.name}</div>
          </div>
          <div className="row content">
            <Link to={`/albums/${album?.id}`}>
              <Button
                className="divButton"
                style={{ display: "flex", alignItems: "center" }}
                fullWidth
              >
                Listen Now <HeadphonesIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
