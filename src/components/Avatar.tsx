import React from 'react';
import styled from 'styled-components';

import DefaultAvatar from '../assets/default-avatar.png';
import { radius } from '../config/constants';

type AvatarProps = {
  src?: string | null;
  width?: string | number | undefined;
  height?: string | number | undefined
  variant?: 'circular' | 'rounded' | 'square' | string;
  alt?: string;
  badgeStatus?: boolean;
  status?: string;
}

const Image = styled.img<{ radius: string | number }>`
  border: 1px solid #7fe2ff;
  border-radius: ${props => props.radius};
  padding: 3px;
`;

// TODO: maybe show badge status
// const BadgeStatus = styled.div<{ status: string }>`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
// `;

const Avatar = ({ src, status = "offline", width = 60, height = 60, variant = 'circular', ...props }: AvatarProps) => {
  return (
    <Image
      src={src ?? DefaultAvatar} 
      width={width} 
      height={height}
      radius={radius[variant]} 
      {...props}
    />
  );
}

export default Avatar;
