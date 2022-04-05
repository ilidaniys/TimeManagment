import React, {useEffect} from 'react';
import styled from 'styled-components'
import moment from "moment";

const DataCounterWrapper = styled.div`
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
`
// For time-format
// moment().format('LTS');


const DataCounter = (gridRow, gridColumn, startCounter, endCounter,) => {


    return (
        <DataCounterWrapper>
            <p> </p>
        </DataCounterWrapper>
    );
};

export default DataCounter;