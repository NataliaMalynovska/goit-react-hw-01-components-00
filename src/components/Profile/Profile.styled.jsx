import styled from '@emotion/styled';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
  width: 800px;
    `;
export const WrapperProfile = styled.div`
  margin:${p => p.theme.space[2]}px; display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
`;
export const Description = styled.div` 
  padding-top:${p => p.theme.space[6]}px; 
  padding-bottom:${p => p.theme.space[5]}px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.white};
  
`;
export const Avatar = styled.img`
  margin: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[0]}px;
  max-width: 240px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.backgroundLight};
`;
export const UserName = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${ p =>  p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;
export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
export const Stats = styled.ul`
  padding-top:${p => p.theme.space[5]}px; 
  padding-bottom:${p => p.theme.space[5]}px; 
  display: flex;
  justify-content: space-evenly;
  background-color: ${p => p.theme.colors.backgroundLight};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;
export const Quantity = styled.span`
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  text-align: center;
`;