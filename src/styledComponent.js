import styled from 'styled-components'

export const NavHeader = styled.div`
  background-color: #f1f5f9;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
`

export const NavWidthCard = styled.div`
  width: 90%;
`

export const Logo = styled.img`
  width: 130px;
`

export const AppContentCard = styled.div`
  background-color: #ffffff;
  min-height: 90vh;
  display: flex;
  justify-content: center;
`

export const WidthCard = styled.div`
  width: 90%;
  margin-top: 10vh;
`

export const Select = styled.select`
  width: 100%;
  max-width: 250px;
  height: 35px;
  border: 2px solid #e2e8f0;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  color: #475569;
  outline: none;
  font-size: 15px;
  font-weight: 500;
`

export const Option = styled.option``

export const ProjectsList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;
`

export const ProjectItem = styled.li`
  width: 300px;
  margin: 0px 20px 40px 0px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #cbd5e1;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (max-width: 567px) {
    width: 100%;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`

export const Name = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 20px 40px 20px;
`
export const LoaderCard = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureCard = styled.div`
  width: 90%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`

export const FailureImg = styled.img`
  width: 70%;
  max-width: 400px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-size: 25px;
  margin-top: 30px;
  font-weight: 700;
`

export const FailureDescription = styled.p`
  color: #64748b;
  margin-top: 0px;
  font-size: 15px;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #328af2;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
