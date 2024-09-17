import type {Comment} from '@prisma/client'
import { db } from '..'
import { cache } from 'react';

export type CommentWithAuthor = Comment &{
  user: {
    name: string | null; 
    image: string | null;
  };
}
//การใส่ cache ทำให้เราเก้บข้อมูลไว้ โดยที่เราไม่ต้องเรียกข้อมูลจาก serve หลาย ๆ รอบ 
export const fetchCommentByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {
 

  return db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,

        }
      }
    }
  })
  
})