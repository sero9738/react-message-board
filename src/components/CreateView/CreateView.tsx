import React, { useRef, useState } from "react";
import "./CreateView.css";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

interface CreateViewProps {
  createMessage: (subject: string, body: string) => any;
}

function CreateView({ createMessage }: CreateViewProps) {

  const subjectInputRef = useRef<HTMLInputElement>(null);
  const bodyInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (subjectInputRef.current != null && bodyInputRef.current != null) {
      if (
        subjectInputRef.current?.value !== "" &&
        bodyInputRef.current?.value !== ""
      ) {
        createMessage(
          subjectInputRef.current.value,
          bodyInputRef.current.value
        );
        resetForm();
      }
    }
  }

  function resetForm() {
    if (subjectInputRef.current != null && bodyInputRef.current != null) {
      subjectInputRef.current.value = "";
      bodyInputRef.current.value = "";
      subjectInputRef.current.focus();
    }
  }

  return (
    <section id="view-create">
      <form id="create-message-form" onSubmit={(event) => onSubmit(event)}>
        <table>
          <tbody>
            <TextField inputRef={subjectInputRef} label="Subject" />
            <TextField inputRef={bodyInputRef} label="Body" />
            <Button name="Submit" />
          </tbody>
        </table>
      </form>
    </section>
  );
}

export default CreateView;
