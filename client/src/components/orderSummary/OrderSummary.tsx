import { useFormik } from "formik";
import { useAppSelector } from "../../app/hooks";
import type { IOrderPayload } from "../../types/order";
import { createtOrder } from "../../api/orderAPI";
import * as Yup from 'yup';
import FormikTextField from "../common/TextField";
import ProductsList from "./ProductsList";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { btnStyle } from "./stylesheets";

const OrderSummary = () => {

    const cartItems = useAppSelector((state) => state.cart.items);
    const navigate= useNavigate();
    const theme = createTheme({
    direction: 'rtl',
    });

    const formik = useFormik<IOrderPayload>({
        initialValues: {
        fullName: '',
        address: '',
        email: '',
        items: cartItems,
        },
        validationSchema: Yup.object({
        fullName: Yup.string().required('שדה חובה'),
        address: Yup.string().required('שדה חובה'),
        email: Yup.string().email('אימייל לא תקין').required('שדה חובה'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log('Submitting order:', values);
            
        try {
            await createtOrder(values);
            alert('ההזמנה נשלחה בהצלחה!');
            resetForm();
            navigate('/'); 
        } catch (error) {
            alert('אירעה שגיאה בשליחת ההזמנה');
        } finally {
            setSubmitting(false);
        }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>סיכום הזמנה</h1>
                <form onSubmit={formik.handleSubmit}>
                    <FormikTextField name={'fullName'} label={'שם'} formik={formik} required />
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div>{formik.errors.fullName}</div>
                    ) : null}
                    <FormikTextField name={'address'} label={'כתובת'} formik={formik}  required />
                    {formik.touched.address && formik.errors.address ? (
                        <div>{formik.errors.address}</div>
                    ) : null}
                    <FormikTextField name={'email'} label={'אימייל'} formik={formik}  required />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    <ProductsList />

                    <Button type="submit" variant="outlined" sx={btnStyle} disabled={formik.isSubmitting}>
                        שלח הזמנה
                    </Button>
                </form>
            </div>
       </ThemeProvider>
    )
  }
  export default OrderSummary;