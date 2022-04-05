import styled from "styled-components";

export const RegisnterWrapper = styled.div`
  height: ${props => props.height || '10rem'};
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  background: var(--registr-button-color);
  margin-top: 5rem;
`
export const RegisterConteiner = styled.form`
  margin-top: 1.2rem;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`
export const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`