'use client'

import React from 'react'
import * as actions from "@/app/actions";
import FormButton from "@/app/components/common/form-button";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

function PostCreateForm() {
  return (
    <Popover placement='left' >
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent >
        <form >
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3>Creat a Post</h3>
            
            <Input name='title' label='title' labelPlacement='outside' placeholder='title' />

            <Input name='content' label='content' labelPlacement='outside' placeholder='Content' />
            
            <FormButton >Create Post</FormButton>

          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm
