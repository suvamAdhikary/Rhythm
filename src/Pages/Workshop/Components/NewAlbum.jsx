
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addAlbum } from "../../../Redux/Album/action";

const Wrapper = styled.div`

`;

const NewAlbum = () => {
    
    const artistId = useParams();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(addAlbum({ id : artistId?.id, mainData }));
        
    }



    return (
        <>
            <Wrapper>
                <fieldset>

                    <legend>ADD NEW ALBUM</legend>
                    {/* <input type="hidden" name="artists" value={artistId.id} onLoad={handleChange} /> */}
                    <fieldset>
                        <legend>NAME</legend>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            // value={mainData?.name}
                            // onChange={handleChange}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>COVER PHOTO</legend>
                        <input
                            type="url"
                            name="coverPic"
                            placeholder="Cover Pic URL"
                            // value={mainData?.coverPic}
                            // onChange={handleChange}
                            />
                    </fieldset>

                    <br />

                    <button onClick={(e) => handleSubmit(e)} >SUBMIT</button>

                </fieldset>
            </Wrapper>
        </>
    )
}

export default NewAlbum;