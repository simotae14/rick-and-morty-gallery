import { CloseIcon, CloseButtonContainer } from './CloseButton.styles';

interface CloseIconProps {
  /**
   * Is the handler to close the button
   */
  onClickClose: () => void;
}

/**
 * Component used for the 404 page and on loading
 */
function CloseButton({ onClickClose }: CloseIconProps) {
  return (
    <CloseButtonContainer onClick={onClickClose}>
      <CloseIcon />
    </CloseButtonContainer>
  );
}

export default CloseButton;
