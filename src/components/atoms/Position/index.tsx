import { Info, Value } from './Position.styles';

interface PositionProps {
  /**
   * Is this the label type of the position
   */
  labelType: string;
  /**
   * Is this the name of the position
   */
  name: string;
  /**
   * Is this the type of the position (planet, space location)
   */
  type: string;
  /**
   * Is this the dimension of the position
   */
  dimension: string;
}

/**
 * Component that contains the information of character locations (Origin, Location)
 */
function Position({ labelType, name, type, dimension }: PositionProps) {
  return (
    <Info>
      {labelType}:{' '}
      <Value>
        {name} - {type} - {dimension}
      </Value>
    </Info>
  );
}

export default Position;
