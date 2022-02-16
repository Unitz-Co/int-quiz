/** RadiusType */
export interface RadiusType {
  [key: string]: string | number;
}

export const radius: RadiusType = {
  'circular': '50%',
  'rounded': '10px',
  'square': '3px'
}

/** ButtonSizeType */
export interface ButtonSizeType {
  [key: string]: 'small' | 'medium' | 'large' | string;
}

export const buttonSize: ButtonSizeType = {
  'small': 'width: 70px; height: 30px;',
  'medium': 'width: 135px; height: 45px;',
  'large': 'width: 150px; height: 70px;'
}

/** ButtonSizeType */
export interface ButtonVariantType {
  [key: string]: 'contained' | 'outlined' | 'text' | string;
}

export const buttonVariant: ButtonVariantType = {
  'contained': 'border: 0; background-color: #08a1a0;',
  'outlined': 'border: 1px solid #08a1a0; background-color: transparent;',
  'text': 'border: 0; background-color: transparent;'
}

/** DisplayView */
export const horizontalView = 'horizontal';
export const verticalView = 'vertical';

/** Filtering */
export const advisorsFilter = [
  {
    title: "Status",
    value: "all"
  },
  {
    title: "Status: online",
    value: "online"
  },
  {
    title: "Status: offline",
    value: "offline"
  }
]
