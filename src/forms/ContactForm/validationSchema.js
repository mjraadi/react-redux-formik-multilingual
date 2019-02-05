import * as Yup from "yup";

export const validationSchema = 
  Yup.object({
    fullName: 
      Yup.string("contactForm.fullName.helperText.default")
        .required("contactForm.fullName.helperText.required"),
    emailAddress: 
      Yup.string("contactForm.emailAddress.helperText.default")
        .email("contactForm.emailAddress.helperText.email")
        .required("contactForm.emailAddress.helperText.default"),
    message: 
      Yup.string("contactForm.message.helperText.default")
        .required("contactForm.message.helperText.required"),
  });