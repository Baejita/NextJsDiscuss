'use client'

import * as actions from "@/app/actions";
import FormButton from "@/app/common/form-button";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors:{}
  })
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Toppic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className=" flex flex-col gap-4 p-4 w-80">
            <h3 className="text-xl">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
          
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe yout topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-500 text-red-700">{formState.errors._form?.join(', ')}</div> : null}
            <FormButton >Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default TopicCreateForm;
