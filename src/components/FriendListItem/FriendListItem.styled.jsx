import styled from '@emotion/styled';

export const FriendItem = styled.li`
  margin:${p => p.theme.space[3]}px; 
  padding:${p => p.theme.space[4]}px; 
  width: ${p => p.theme.space[8]}px;
  
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px; 
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
    -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
    -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
`;
export const Status = styled.span`
  display: block;
  width: ${p => p.theme.space[4]}px; 
  height: ${p => p.theme.space[4]}px; 
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.isOnline ?
    p.theme.colors.online : p.theme.colors.offline};
`;
export const Avatar = styled.img`
 border-radius: ${p => p.theme.radii.normal};
`;
export const FriendName= styled.p`
  font-size: ${ p =>  p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;