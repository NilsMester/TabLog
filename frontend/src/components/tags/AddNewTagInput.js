import React, {useState} from 'react';
import styled from 'styled-components/macro';
import InputField from "../UI/InputField";
import {RiAddCircleFill} from "react-icons/ri";

export default function AddNewTagInput({recordData, setRecordData}){

    const [addNewTag, setAddNewTag] = useState("");

    return (
        <LabelStyled>
            <InputField search
                        name="addNewTag"
                        value={addNewTag || ""}
                        onChange={event => setAddNewTag(event.target.value)}
                        type="text"/>
            <NewRecordButtonStyled type="button" onClick={handleTagKlickButton}/>
        </LabelStyled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagList: [...recordData.tagList, addNewTag]});
        setAddNewTag("");
    }
}

const DivStyled = styled.div`
`

const LabelStyled = styled.label`
padding: 0 4px;
font-size: 0.8em;
color: var(--grey-main);
text-align: center;
`
const NewRecordButtonStyled = styled(RiAddCircleFill)`
position: relative;
top: -1.4vh;
left: 11vw;
height: 30px;
width: 30px;
color: var(--orange-75);
`
