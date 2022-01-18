import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllAlbums } from "../../Redux/Album/action";
import { getAllGenres } from "../../Redux/Genre/action";
import { debounceAlbums } from "../../Utils/Axios";
import useQuery from "../../Utils/useQuery";

const Wrapper = styled.main`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .album__container {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .album__left {
      display: flex;
      flex-direction: column;

      .album__control {
        width: 10vw;
        display: flex;
        flex-direction: column;
      }
    }

    .album__right {
      display: flex;
      flex-direction: column;

      .album__box {
        width: 75vw;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2%;

        .album__box--child {
          width: 100%;
          height: 100%;

          > img {
            object-fit: cover;
            width: 100%;
            height: 50%;
          }

          .album__box--artist {
            display: flex;

            > img {
              object-fit: cover;
              width: 50%;
              height: 30%;
            }
          }
        }

        .album__box--genres {
          display: flex;
          gap: 5px;
        }
      }
    }

    .album__text {
      text-decoration: none !important;
      color: black;
    }
  }
`;

const Album = () => {
  const [page, setPage] = useState(1);
  const [showPages, setShowPages] = useState([1]);
  const [searchRes, setSearchRes] = useState([]);
  const [queryGenre, setQueryGenre] = useState([]);
  const [querySort, setQuerySort] = useState("");

  var timerId;

  let history = useHistory();
  let query = useQuery();

  let genreFromQuery = query?.get("Genre");
  // let genreFromQueryArray = query?.get('Genre').split('%0D');
  let sortFormQuery = query?.get("Sort");
  let pageFromQuery = query?.get("page");
  // query = query.slice(7).trim().split(/[&]+/);

  // FETCH ALBUM DATA
  // const getAlbumData = (gnr, pg, srt) => {

  //   dispatch(getAllAlbums( gnr || "", pg || 1, srt || ""));
  // }

  // Album Data from Redux
  const {
    loading,
    data: { data, pages },
    // debounced,
    error,
  } = useSelector((store) => store?.album?.albums);

  // Genre Data from Redux
  const genre = useSelector((store) => store?.genre?.genres);

  const dispatch = useDispatch();
  // console.log(debounced);
  // console.log({ loading, data, error, pages, genre, query });

  // Genre Filter Handler
  const handleGenreFilter = (id) => {
    let set = new Set(queryGenre);
    setPage(1);
    if (!set.has(id)) {
      setQueryGenre([...queryGenre, id]);

      if (querySort !== "") {
        return history.push(
          `?Genre=${[...set, id].join("%0N")}&page=${1}&Sort=${querySort}`
        );
      } else {
        return history.push(`?Genre=${[...set, id].join("%0N")}&page=${1}`);
      }
    } else {
      set.delete(id);
      setQueryGenre([...set]);
      if (set.size < 1) {
        if (querySort === "") {
          return history.push(`/albums?page=${1}`);
        } else {
          return history.push(`?page=${1}&Sort=${querySort}`);
        }
      } else {
        if (querySort !== "") {
          return history.push(
            `?Genre=${[...set].join("%0N")}&page=${1}&Sort=${querySort}`
          );
        } else {
          return history.push(`?Genre=${[...set].join("%0N")}&page=${1}`);
        }
      }
    }
  };

  // Year Sort Handler
  const handleYearSorting = (mode) => {
    setQuerySort(mode);
    setPage(1);
    if (mode === "") {
      if (queryGenre.length < 1) {
        return history.push(`/albums?page=${1}`);
      } else {
        return history.push(`?Genre=${queryGenre.join("%0N")}&page=${1}`);
      }
    }

    if (queryGenre < 1) {
      return history.push(`?page=${1}&Sort=${mode}`);
    } else {
      return history.push(
        `?Genre=${queryGenre.join("%0N")}&page=${1}&Sort=${mode}`
      );
    }
  };

  const pageHandler = (p) => {
    setPage(p);
    console.log(p, "frm page hndl");
    if (queryGenre.length > 0) {
      if (querySort === "") {
        return history.push(`?Genre=${queryGenre.join("%0N")}&page=${p}`);
      } else {
        return history.push(
          `?Genre=${queryGenre.join("%0N")}&page=${p}&Sort=${querySort}`
        );
      }
    } else {
      if (querySort === "") {
        return history.push(`?page=${p}`);
      } else {
        return history.push(`?page=${p}&Sort=${querySort}`);
      }
    }
  };

  // Pagination Function
  const handlePageNumbers = (no) => {
    let nums = [];
    for (let i = 1; i <= no; i++) {
      nums.push(i);
    }
    setShowPages(nums);
  };

  // Search Function
  const handleSearch = (key) => {
    if (key.trim().length < 1) {
      setSearchRes([]);
      return;
    }
    // let albums = [];
    // albums = albums.filter((el) => el.name.indexOf(key) !== -1);
    // console.log(albums, "check");

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      debounceAlbums(key).then(({ data: { albums } }) => {
        setSearchRes(albums);
      });
      // setSearchRes(albums);
      // dispatch(getDebounced(key));
    }, 500);

    // clearTimeout(timerId);

    // if (albums.length > 0) setSearchRes(albums);
  };

  // UseEffect
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getAllAlbums({
          genres: genreFromQuery,
          page: pageFromQuery,
          sort: sortFormQuery,
        })
      ).then(() => {
        handlePageNumbers(pages);
      });

      dispatch(getAllGenres());
      // setQueryGenre(genreFromQueryArray);
      // setQuerySort(sortFormQuery);
    }, 500);
  }, [
    dispatch,
    pages,
    page,
    searchRes,
    queryGenre,
    querySort,
    genreFromQuery,
    pageFromQuery,
    sortFormQuery,
  ]);
  // console.log(debounced?.data);
  return (
    <>
      <Wrapper>
        <h1>ALBUMS</h1>
        <br />
        <div className="album__container">
          <aside className="album__left">
            <div className="album__control">
              <div>
                <input
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button>SEARCH</button>
              </div>
              {searchRes?.length > 0 && (
                <section>
                  {searchRes?.map((el, i) => (
                    <Link to={`/album/${el?._id}`} key={`${el?._id}-${i}`}>
                      {el?.name}
                    </Link>
                  ))}
                </section>
              )}
            </div>
            <br />
            <div>
              <h2>SORT</h2>
              <button onClick={() => handleYearSorting("NTO")}>
                NEW TO OLD
              </button>
              <button onClick={() => handleYearSorting("OTN")}>
                OLD TO NEW
              </button>
              <button onClick={() => handleYearSorting("")}>RESET</button>
            </div>
            <br />
            <div>
              <h2>FILTER</h2>
              <div>
                <h3>GENRE</h3>
                {genre?.loading ? (
                  <h1>Loading ...</h1>
                ) : genre?.error ? (
                  <h1>Something went wrong...</h1>
                ) : (
                  <div>
                    {genre?.data?.map((genre) => (
                      <div key={genre?._id}>
                        <input
                          value={genre?._id}
                          type="checkbox"
                          checked={queryGenre.indexOf(genre?._id) !== -1}
                          onChange={() => handleGenreFilter(genre?._id)}
                        />
                        <label htmlFor="genre">{genre?.title}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>
          <div className="album__right">
            {loading ? (
              <h1>Loading ...</h1>
            ) : error ? (
              <h1>Something went wrong</h1>
            ) : (
              <div>
                <div className="album__box">
                  {data?.map((album) => (
                    <Link
                      key={album?._id}
                      to={`/album/${album._id}`}
                      className="album__box--child"
                    >
                      <img src={album?.coverPic} alt="coverImage" />
                      <h3 className="album__text">{album?.name}</h3>
                      <h5 className="album__text">
                        Total Songs: {album?.noOfSong}
                      </h5>
                      <h5 className="album__text">Released: {album?.year}</h5>
                      <h6 className="album__box--genres album__text">
                        {album?.genres?.map((genre, i) => (
                          <span key={`${i}-${genre._id}`}>{genre?.title}</span>
                        ))}
                      </h6>
                      <div className="album__box--artist">
                        <img
                          src={album?.artists?.[0]?.profilePic}
                          alt="artistImage"
                        />
                        <h4 className="album__text">
                          {album?.artists?.[0]?.name}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
                <br />
                <br />
                <div>
                  <button
                    onClick={() => pageHandler(page - 1)}
                    disabled={page === 1}
                  >
                    PREV
                  </button>
                  {showPages?.map((p) => (
                    <button
                      key={p}
                      onClick={() => pageHandler(p)}
                      disabled={page === p}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => pageHandler(page + 1)}
                    disabled={page === pages}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Album;
