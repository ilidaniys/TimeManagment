import React from 'react';
import styled from 'styled-components'

const DataCounterWrapper = styled.div`
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
`


const DataCounter = (props) => {
    return (
        <DataCounterWrapper {...props}>

        </DataCounterWrapper>
    );
};

export default DataCounter;