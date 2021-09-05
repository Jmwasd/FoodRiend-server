import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm/index';
import { Bookmark } from './Bookmark.entity';
import { Friend_List } from './Friend_List.entity';
import { Shop_Info } from './Shop_Info.entity';
import { Write_Board } from './Write_Board.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column()
  profileImage: string;

  @Column()
  phoneNumber: string;

  @Column()
  foodType: string;

  @Column()
  foodStyle: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Friend_List, (friendList) => friendList.user_id, {
    cascade: ['update', 'remove'],
  })
  friendList: Friend_List[]; // method

  @ManyToMany(() => Shop_Info, { cascade: ['remove', 'update'] })
  @JoinTable({ name: 'Bookmark' })
  bookmark: Bookmark[];
  users: Users[];
  shopInfo: Shop_Info[];

  @OneToMany(() => Write_Board, (writeBoard) => writeBoard.user_id, {
    cascade: ['remove', 'update'],
  })
  board: Write_Board[];
}