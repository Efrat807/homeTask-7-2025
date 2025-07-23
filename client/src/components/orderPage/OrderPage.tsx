import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadCategories } from '../../features/categories/categoriesSlice';
import { loadProducts } from '../../features/products/productsSlice';
import { addToCart } from '../../features/cart/cartSlice';
import type { ICategory, IProduct } from '../../models';
import Cart from '../Cart';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './orderPage.css'

const OrderPage =()=> {
  const dispatch = useAppDispatch();
  const categoriesState = useAppSelector((state) => state.categories) as { items: ICategory[] };
  const productsState = useAppSelector((state) => state.products) as { items: IProduct[] };

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const [selectedProducts, setSelectedProducts] = useState<number[] | null>(null);
const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory !== null) {
      dispatch(loadProducts(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  const resetForm = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
    setSelectedQuantity(1);
  }

  useEffect(() => {
    document.body.dir = 'rtl';
  }, []);

  return (
    <Box className="order-form">
      <Typography variant="h4" gutterBottom>הזמנה</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel>קטגוריה</InputLabel>
        <Select
          value={selectedCategory ?? ''}
          onChange={(e) => {
            setSelectedCategory(Number(e.target.value));
            setSelectedProduct(null);
          }}
          label="קטגוריה"
        >
          <MenuItem value="" disabled>בחר קטגוריה</MenuItem>
          {categoriesState.items.map((c: ICategory) => (
            <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" disabled={productsState.items.length === 0}>
        <InputLabel>מוצר</InputLabel>
        <Select
          value={selectedProduct ?? ''}
          onChange={(e) => {
            setSelectedProduct(Number(e.target.value));
            setSelectedProducts(products =>
              products ? [...products, Number(e.target.value)] : [Number(e.target.value)]);
          }}
          label="מוצר"
        >
          <MenuItem value="" disabled>בחר מוצר</MenuItem>
          {productsState.items.map((p: IProduct) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name} ({p.price} ₪)
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="כמות"
        type="number"
        inputProps={{ min: 1 }}
        fullWidth
        margin="normal"
        value={selectedQuantity}
        onChange={(e) => {
          const value = Number(e.target.value);
          setSelectedQuantity(value < 1 ? 1 : value);
        }}
      />

      <Box className="button-row">
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedProduct}
          onClick={() => {
            dispatch(addToCart({
              product: (productsState.items.find((p: IProduct) => p.id === selectedProduct) as IProduct)!,
              quantity: selectedQuantity,
              categoryName: categoriesState.items.find((c: ICategory) => c.id === selectedCategory)?.name || ''
            }));
            resetForm();
          }}
        >
          הוסף לסל
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {    
            navigate('/order')
        }}
        >
          שליחת הזמנה
        </Button>
      </Box>

      {selectedProducts && <Cart />}
    </Box>
  );
}

export default OrderPage;