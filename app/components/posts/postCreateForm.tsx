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

function PostCreateForm() {
  const [formState, action] = useFormState(actions.createPost, {
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
            
            <FormButton >Create Post</FormButton>

          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm
