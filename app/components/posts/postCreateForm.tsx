'use client'

import { useFormState } from "react-dom";
import * as actions from "@/app/actions";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import FormButton from "../common/form-button";

interface PostCreateFormProps {
  slug: string;
}

function PostCreateForm({slug}: PostCreateFormProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
        errors: {}
  })
  

    
  return (
    <Popover placement='left' >
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent >
        <form action ={action} >
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3>Creat a Post</h3>
            
            <Input isInvalid={!!formState.errors.title}
              errorMessage={
              formState.errors.title?.join(', ')
            } name='title' label='title' labelPlacement='outside' placeholder='title' />

            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={
              formState.errors.content?.join(', ')
            }
              name='content' label='content' labelPlacement='outside' placeholder='Content' />
            {
              formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-300 text-red-700">
                {formState.errors._form.join(', ')}
              </div> : null
            }
            <FormButton >Create Post</FormButton>

          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm
