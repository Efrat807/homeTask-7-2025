import { TextField } from '@mui/material';

interface IProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value?: string | number;
  formik?: any;
}

const FormikTextField = ({ label, type = 'text', formik, ...props }: IProps) => {
  // const [field, meta] = useField(props.name);
  const field=formik.field;
  const meta = formik.getFieldMeta(props.name);

  return (
    <TextField
      {...field}
      {...props}
      type={type}
      label={label}
      fullWidth
      value={formik.values[props.name]}
      sx={{direction: 'rtl'}}
      onChange={formik.handleChange}
      // onChange={(e) => {formik.setFieldValue(field.name, e.target.value)}}
      margin="normal"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default FormikTextField;