import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from './CategoriesPreview';
import Category from './Category';



export default function Shop(){
   
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

