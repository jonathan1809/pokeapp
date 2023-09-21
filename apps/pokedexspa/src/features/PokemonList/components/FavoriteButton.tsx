import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faHeartbeat as regularHeart,
} from "@fortawesome/free-solid-svg-icons";

export type FavoriteButtonProps = {
  isFavorite: boolean;
  onFavoriteClick: () => void;
};
const FavoriteButton = ({
  isFavorite,
  onFavoriteClick,
}: FavoriteButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onFavoriteClick();
  };
  return (
    <button onClick={handleClick}>
      {isFavorite ? (
        <FontAwesomeIcon icon={solidHeart} />
      ) : (
        <FontAwesomeIcon icon={regularHeart} />
      )}
    </button>
  );
};

export default FavoriteButton;
