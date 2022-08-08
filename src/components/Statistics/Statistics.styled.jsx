import styled from '@emotion/styled';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
  width: 800px;
   `;

export const SectionStatistics = styled.div`
  margin:${p => p.theme.space[2]}px; 
  padding:${p => p.theme.space[6]}px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
`;
export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
`;
export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  padding:${p => p.theme.space[4]}px; 
  display: flex;
  flex-direction: column;
  background-color: ${p => {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}};
`;
export const Label = styled.span`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${ p =>  p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.white};
`;
export const Percentage = styled.span`
    text-align: center;
    font-size: ${ p =>  p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.white}; 
`;