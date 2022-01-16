import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllAlbums } from "../../Redux/Album/action";

const Wrapper = styled.main`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;



  .album__control{
      width: 90vw;
      display: flex;
      justify-content: space-between;
  }

  .album__box {
    width: 90vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2%;


    .album__box--child{
        width: 100%;
        height: 100%;

        > img {
            object-fit: cover;
            width: 100%;
            height: 50%;
        }

        .album__box--artist{
            display: flex;

            > img {
                object-fit: cover;
                width: 50%;
                height: 30%;
            }
        }
    }
  }
`;

const Album = () => {
  const [page, setPage] = useState(1);
  const [showPages, setShowPages] = useState([1]);
  const [sortOn, setSortOn] = useState(false);
  const [searchRes, setSearchRes] = useState([]);

  
  const {
      loading,
      data: { data, pages },
      error,
    } = useSelector((store) => store?.album?.albums);
    
    const dispatch = useDispatch();
    
    console.log(loading, data, error, pages);
    
    const handlePageNumbers = (no) => {
        let nums = [];
        for (let i = 1; i <= no; i++) {
            nums.push(i);
        }
        setShowPages(nums);
    };

    const handleSearch = (key) => {
        if(key.trim().length < 1) {
            setSearchRes([]);
            return;
        };
      let albums = data;
      albums = albums.filter((el) => el.name.indexOf(key) !== -1);
      console.log(albums, "check");
      if(albums.length > 0) setSearchRes(albums);
    }
    
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllAlbums(page));
      handlePageNumbers(pages);
    }, 500);
  }, [dispatch, pages, page, sortOn, searchRes]);

  return (
    <>
      <Wrapper>
        <h1>ALBUMS</h1>
        <br />
        <div className="album__control">
            <div>
                <input type="search" onChange={(e) => handleSearch(e.target.value)} />
                <button>SEARCH</button>
            </div>
            <button onClick={() => setSortOn(!sortOn)} >SORT</button>
        </div>
        { searchRes.length > 0 &&
            <section>
                {searchRes?.map((el, i) => (
                    <Link to={`/album/${el?._id}`} key={`${el?._id}-${i}`} >
                        {el?.name}
                    </Link>
                ))}
            </section>
        }
        <br />
        <div>
          <div className="album__box">
            {data
              ?.sort((a, b) => sortOn && b.year - a.year)
              ?.map((album) => (
                <Link
                  key={album?._id}
                  to={`/album/${album._id}`}
                  className="album__box--child"
                >
                  <img src={album?.coverPic} alt="coverImage" />
                  <h3>{album?.name}</h3>
                  <h5>Total Songs: {album?.noOfSong}</h5>
                  <h5>Released: {album?.year}</h5>
                  <div className="album__box--artist" >
                    <img
                      src={album?.artists?.[0]?.profilePic}
                      alt="artistImage"
                    />
                    <h4>{album?.artists?.[0]?.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
          <div>
            {showPages?.map((p) => (
              <button key={p} onClick={() => setPage(p)}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Album;
