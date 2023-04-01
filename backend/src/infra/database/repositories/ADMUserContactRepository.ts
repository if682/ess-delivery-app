import { ADMUserContact } from '../typeorm/entities/ADMUserContact.entity';
import { ADMUserContactDTO } from '../interfaces/userContact.interface';

export default abstract class UserContactRepository {
  abstract getContactByUserId(id: string): Promise<ADMUserContact>;
  abstract createContact(contact: ADMUserContactDTO): Promise<ADMUserContact>;
}
