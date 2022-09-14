import styled from 'styled-components';

interface ColorProps {
  color: string; 
};
interface IListWrapper {
  children: React.ReactNode|React.ReactNode[];
}
export const ListWrapper = styled.div<IListWrapper>`
  display: flex;
  flex-direction: column;
  height: 70%;
  @media only screen and (max-width: 2600px) {
    width: 45%;
  };
  @media only screen and (max-width: 1600px) {
    width: 75%;
  }
  // background: #393b65;
  // text-transform: uppercase;
  position: absolute;
  top: 5%;
  left: 20%;
  // overflow: hidden;
  overflow: auto;
  margin-top: 70px
}
`;

export const ListItem = styled.li<ColorProps>`
  display: inline;
  padding-top: 10px;
  height: 8%;
  background: ${prop => prop.color};
  border: 1px solid #e0e0e0;
  justify-content: center;
  font-family: sans-serif;
  text-align: left;
`

export const ListHeader = styled.div`
  background-color: #3D99CE;
  text-align: left;
  height: 8%;
  padding-top: 15px;
`
export const Filter = styled.input`
  width: 25%;
  margin-left: 5px;
  ::placeholder {
    color: grey;
    font-size: 0.8em;
    opacity: 0.5
  }
`

export const FilterWrapper = styled.div`
  margin-bottom: 75px;
  display: flex;
  flex-direction: row;
  height: 15%;
  @media only screen and (max-width: 2600px) {
    margin-left: 500px;
  };
  @media only screen and (max-width: 1600px) {
    margin-left: 300px;;
  }
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const DropdownItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
//#e5eaf9;