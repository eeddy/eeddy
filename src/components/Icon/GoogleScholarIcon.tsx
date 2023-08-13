import GoogleIcon from '@mui/icons-material/Google';
import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <GoogleIcon></GoogleIcon>
  </Icon>
));

export default GoogleScholarIcon;
