import { number, object, string } from "yup";

const formValidator = object().shape({
   id: string().notRequired(),
   system_name: string().required("Please inform System Name."),
   hdd_capacity: number().min(1, "Inform a capacity higher than 0.").required("Please inform HDD capacity."),
   type: object({
      value: string().required("Please inform System OS."),
      label: string().notRequired(),
   }),
});
export { formValidator };
