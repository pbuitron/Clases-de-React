
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBu-DmQ-nCiKt0J1jFQMHZZGOuFtNEye64",
    authDomain: "tienda-virgo-coder44995.firebaseapp.com",
    projectId: "tienda-virgo-coder44995",
    storageBucket: "tienda-virgo-coder44995.appspot.com",
    messagingSenderId: "496984435311",
    appId: "1:496984435311:web:7da0bf9cea2e6b8ae3bb9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{
            descripcion : prod.descripcion,
            detalles: prod.detalles,
            stock: prod.stock,
            precio: prod.precio,
            idCategoria: prod.idCategoria,
            img: prod.img
        })
    })

}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}