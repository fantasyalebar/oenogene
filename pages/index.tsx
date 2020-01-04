import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}
const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NTAwMDM1Y2ItMmNmZi00MDhkLThiNTgtMWM4YzgwM2E4MzdhNjM3MTM2MzcyNDMxNzg5MzIx" id="snipcart"></script>
  <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {id: "nextjs_vin1", name: "Esprit de Puisseguin", price: 75.00, image: "../static/vin1.jpg", description: "Un vin a l'arôme certain, la séléction du Chef."} as IProduct,
      {id: "nextjs_vin2", name: "Chardonnay", price: 30.00, image: "../static/vin2.jpg", description: "Les vins issus de Chardonnay sont des vins amples et élégants aux arômes fins et fruités. En Bourgogne, il est vieilli en fûts de chêne. Les arômes varient selon les terroirs : miel, beurre en Côte d'Or, pierre à fusil, fruits blancs (poire, pêche, litchi) à Chablis."} as IProduct,
      {id: "nextjs_vin3", name: "Palacio De Menadi", price: 49.00, image: "../static/vin3.jpg", description: "Influencé par des vignerons prestigieux tel que J.P Moueix de Pétrus, Alvaro Palacios a diminué de façon draconienne les rendements dans le but de produire le meilleur vin possible. Son rêve étant de produire un vin à mi-chemin entre Pétrus et Penfold'/s Grange."} as IProduct,
      {id: "nextjs_vin4", name: "Butchers Block Red", price: 35.00, image: "../static/vin4.jpg", description: "The Butchers Block is a traditional Barossa blend made with grapes selected from the Turkey Flat vineyards, including some from the original old vine plantings."} as IProduct,
      
    ]
  }
}
export default Index