'use server'
import type { Topic } from '@prisma/client';
import {z } from 'zod';
import { auth } from '../auth';
import { redirect } from 'next/navigation';
import { db } from '../db';
import path from '../paths';
import paths from '../paths';
import { revalidatePath } from 'next/cache';
import { resolve } from 'path';


const  createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z]+$/, {message: 'Must be lowercase lettes or dashes without spaces'}),
    description: z.string().min(10),
})

interface CreateTopicFormState {
    errors: {
        name?: string[],
        description?: string[],
        _form?: string[],
    }

}
export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    await new Promise(resolve => setTimeout(resolve, 2300))

   const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
   })
   if(!result.success){
       return { errors: result.error.flatten().fieldErrors}
    }

    const session = await auth()
    if (!session || !session.user) {
        return {
            errors: {
                 _form: ['You must be signed in do this.']
            }
        }
    }
    let topic: Topic;
    try {
    topic = await db.topic.create({
        data: {
            slug: result.data.name,
            description: result.data.description
        }
    })
    

} catch (err: unknown) {
    if (err instanceof Error) { 
        return {
            errors: {
                _form: [err.message]
            }
        }
    } else {
        return {
            errors: {
                _form:['Something went wrong']
            }
        }
    }
    }
    revalidatePath('/')
    redirect(paths.topicShow(topic.slug))

   
   
    //todo : revalidate to the homepage

}