import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <GoogleIcon></GoogleIcon>
  </Icon>
));

export default GoogleScholarIcon;
