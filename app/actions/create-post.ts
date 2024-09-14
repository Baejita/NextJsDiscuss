'use server'

import { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { auth } from "../auth"
import { db } from "../db"
import paths from "../paths"



const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10)
})

interface CreatePostFormState{
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[]
  }
}

export async function createPost(formStat: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {

  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),

})

  if (!result.success) { 
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  return {
    errors:{}
  }
//todo : revalidate topic to showpage
}