import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ADMUserContact } from '../../entities/ADMUserContact.entity';
import UserContactRepository from 'src/infra/database/repositories/ADMUserContactRepository';
import { ADMUserContactDTO } from 'src/infra/database/interfaces/userContact.interface';

@Injectable()
export class TypeOrmUserContactRepository implements UserContactRepository {
  constructor(
    @Inject('USER_CONTACT_REPOSITORY')
    private contactRepository: Repository<ADMUserContact>,
  ) {}

  getContactByUserId(id: string): Promise<ADMUserContact> {
    return this.contactRepository.findOne({
      where: {
        userId: id,
      },
    });
  }
  async createContact({
    city,
    complement,
    neighborhood,
    phone,
    reference,
    state,
    street,
    userId,
  }: ADMUserContactDTO): Promise<ADMUserContact> {
    const newContact = new ADMUserContact();

    Object.assign(newContact, {
      city,
      complement,
      neighborhood,
      phone_number: phone,
      reference,
      state,
      street,
      userId,
    });

    await this.contactRepository.save(newContact);

    return newContact;
  }
}
