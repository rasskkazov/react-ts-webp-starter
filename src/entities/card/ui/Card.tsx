import { useSkeleton } from "@/shared/ui/skeleton/useSkeleton";
import * as classes from "./Card.module.scss";

export const Card = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  const { isLoading, setIsLoading, Skeleton } = useSkeleton();
  return (
    <div className={classes.card}>
      {isLoading && Skeleton()}
      <img
        className={`${classes.card__image}${isLoading ? "--loading" : ""}`}
        src={img}
        onLoad={() => setIsLoading(false)}
      />
      {!isLoading && (
        <div className={classes.card__content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
