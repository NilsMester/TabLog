import React, {createContext, useContext, useState} from 'react';
import RecordForm from "../../commons/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../commons/Header";
import SideBarActions from "../../commons/SideBarActions";
import styled from 'styled-components/macro';
import SideBarActionButton from "../../commons/SideBarActionButton";

export const RecordFormDataContext = createContext({});

const initialState = {
    titel:"",
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

export default function AddRecordPage() {
    const{createRecord} = useContext(RecordContext)

    const [recordData, setRecordData] = useState(initialState);
    const [recordTagsList, setRecordTagsList] = useState("");

    const history = useHistory();

    return(
        <>
            <RecordFormDataContext.Provider value={{recordData, setRecordData, recordTagsList, setRecordTagsList, handleTagKlickButton}}>
                <MainGrid>
                    <SideBarActionButton first>Tags</SideBarActionButton>
                    <SideBarActionButton>New Tag</SideBarActionButton>
                    <Header titel="New Record"/>
                    <DivStyled>
                        <RecordForm onSave={handleSave} onChange={handleChange} onAddTagKlick={handleTagKlick}/>
                        <SideBarActions/>
                    </DivStyled>
                </MainGrid>
            </RecordFormDataContext.Provider>
        </>
    )

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagsList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagsList);
        history.push('/');
    }

    function handleChange(recordData) {
        setRecordData(recordData);
    }

    function handleTagKlick(recordData) {
        setRecordData(recordData);
    }

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, recordTagsList]});
        setRecordTagsList("");
    }

}
const MainGrid = styled.div`
display: grid;
grid-template-rows: min-content 1fr;
height: 100vh;
`

const DivStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;

`