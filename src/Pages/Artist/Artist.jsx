import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { updateArtist } from "../../Redux/Artist/action";
import UpdateArtist from "./Components/UpdateArtist";

const Wrapper = styled.main``;

const Artist = () => {
  const [profileEdit, setProfileEdit] = useState(false);

  const { loading, data, error } = useSelector(
    (store) => store?.artist?.artist
  );

  const dispatch = useDispatch();

  const handleUpdate = (frmData) => {
    const payload = {};

    for (let el in frmData) {
      if (frmData[el] !== "") {
        payload[el] = frmData[el];
      }
    }

    const updateData = {
      id: data._id,
      payload,
    };

    dispatch(updateArtist(updateData));

    return;
  };

  useEffect(() => {
    setTimeout(() => {}, 500);
  }, [dispatch]);

  return loading ? (
    <h1>Loading ...</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : (
    <>
      <Wrapper>
        <div>
          <h1>WELCOME TO YOUR PLATFORM, {data?.name?.toUpperCase()}</h1>
          <img src={data?.profilePic} alt="profilePic" />
          <br />
          <p>{data?.about}</p>
          <br />
          <div>
            <ul>
              {data?.awards?.map((a, i) => (
                <li key={`${i}-${Date.now()}`}>{a}</li>
              ))}
            </ul>
          </div>
          <br />
          <div>
            <a href={data?.wiki}>WIKI</a>
            <a href={data?.web}>WEBSITE</a>
          </div>
          <button onClick={() => setProfileEdit(!profileEdit)}>
            EDIT PROFILE
          </button>
          <Link to={`/artist/${data?._id}`}>
            <button>EDIT MY ART</button>
          </Link>
        </div>
        {profileEdit && <UpdateArtist handleUpdate={handleUpdate} />}
      </Wrapper>
    </>
  );
};

export default Artist;
