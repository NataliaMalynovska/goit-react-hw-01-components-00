import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-left: auto;
  padding:${p => p.theme.space[4]}px; 
  width: 800px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
   `;
export const Table = styled.table`
  width: 100%;
  padding:${p => p.theme.space[4]}px; 
  text-align: center;
  `;
export const TableHead = styled.thead`
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normale};
  background-color: ${p => {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}};
  height: ${p => p.theme.space[6]}px; 
  `;
export const TableBody = styled.tbody`
  background-color: ${p => p.theme.colors.white};
  `;
export const Row = styled.tr`
  height: ${p => p.theme.space[5]}px; 
  :nth-child(even) {
    background-color: ${p => p.theme.colors.backgroundLight};
   }
   `;  
export const Cell = styled.td`
font-size: ${ p =>  p.theme.fontSizes.styled};
  `;