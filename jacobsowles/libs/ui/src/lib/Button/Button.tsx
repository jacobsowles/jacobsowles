import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core';

const Button = (props: MUIButtonProps) => {
  return (
    <MUIButton {...props} />
  );
}

export { Button }
