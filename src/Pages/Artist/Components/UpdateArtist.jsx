const { useState } = require("react");
const { default: styled } = require("styled-components");



const Wrapper = styled.section`

`;


const initState = {
    name: "",
    birth: "",
    about: "",
    profilePic: "",
    coverPic: "",
    wiki: "",
    web: "",
}

const UpdateArtist = ({ handleUpdate }) => {
    const [formData, setFormData] = useState(initState);

    const handleChange = (e) => {
        let { name, value } = e.target;

        setFormData((pre) => ({...pre, [name]: value}));
    }

    const { name, birth, about, profilePic, coverPic, wiki, web} = formData;

    return (
        <>
            <Wrapper>
                <fieldset>
                    <legend>UPDATE FORM</legend>
                        <fieldset>
                            <legend>NAME</legend>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>BIRTH DATE</legend>
                            <input
                                type="date"
                                name="year"
                                value={birth}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>PROFILE PICTURE</legend>
                            <input
                                type="url"
                                name="profilePic"
                                value={profilePic}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>COVER PICTURE</legend>
                            <input
                                type="url"
                                name="coverPic"
                                value={coverPic}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>WIKIPIDIA LINK</legend>
                            <input
                                type="url"
                                name="wiki"
                                value={wiki}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>WEBSITE LINK</legend>
                            <input
                                type="url"
                                name="web"
                                value={web}
                                onChange={(e) => handleChange(e)}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>ABOUT</legend>
                            <textarea
                                name="about"
                                cols="15"
                                rows="5"
                                value={about}
                                onChange={(e) => handleChange(e)}
                            ></textarea>
                        </fieldset>

                        <input
                            type="submit"
                            value="SUBMIT"
                            onClick={() => handleUpdate(formData)}
                        />

                </fieldset>
            </Wrapper>
        </>
    )
}

export default UpdateArtist;