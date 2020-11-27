import React from 'react';
import styled from 'styled-components/macro';
import TagDesign from "./TagDesign";

export default function RecordTagsListItem({recordTagItem}){

    return (
        <StyledListItem>
            <TagDesign>
                {recordTagItem}
            </TagDesign>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
display: inline-block;
padding: 6px 0 0 0;
`

