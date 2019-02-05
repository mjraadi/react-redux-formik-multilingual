import {
  People,
  Email,
  Message
} from "@material-ui/icons";

export const formModel = {
  inputs: [
    {
      name: "fullName",
      i18nLabelID: "contactForm.name",
      multiline: false,
      icon: People,
      inputProps: {
        type: "text",
      }
    },
    {
      name: "emailAddress",
      i18nLabelID: "contactForm.emailAddress",
      multiline: false,
      icon: Email,
      inputProps: {
        type: "email",
      }
    },
    {
      name: "message",
      i18nLabelID: "contactForm.message",
      multiline: true,
      icon: Message,
      inputProps: {
        type: "text",
      }
    }
  ],
  initialValues: {
    fullName: "",
    emailAddress: "",
    message: ""
  },
};