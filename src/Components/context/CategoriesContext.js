import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../../Data/shopData';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});


    
    // you do this once to set
    // useEffect(() => {
    //     addCollectionsAndDocuments('categories', SHOP_DATA);
    // },[]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log("cat", categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
};

