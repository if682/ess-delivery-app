import { Favorite } from '../typeorm/entities/Favorites.entity';

export default abstract class FavoritesRepository {
  abstract getAllByUserId(id: string): Promise<Favorite[]>;
  abstract create(userId: string, reservationId: string): Promise<void>;
  abstract delete(userId: string, reservationId: string): Promise<void>;
  abstract getByUserAndReservationId(
    userId: string,
    reservationId: string,
  ): Promise<Favorite>;
}
