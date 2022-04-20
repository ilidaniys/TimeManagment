import styled from "styled-components";

export const RegisterWrapper = styled.div`
  height: ${props => props.height || '10rem'};
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  background: var(--gray-2);
  border-radius: .5rem;
  position: relative;
  //padding-top: 5rem;
  top: 5rem;
`
export const RegisterConteiner = styled.form`
  position: inherit;
  padding-top: 2rem;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  
  >p {
    font-size: var(--font-weight-6);
    color: var(--red-8);
  }
`
export const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 80%;
`