import LifeStyleCollection from "@/src/components/LifeStyleCollection";
import Features from "@/src/components/features/Features";
import CategoryContainer from "@/src/components/category/CategoryContainer";
import DealsOfDay from "@/src/components/product/DealsOfDay";
import OfferBannerContainer2 from "@/src/components/offers/OfferBannerContainer2";
import ElectronicProductsCategory from "../components/slidingProducts/ElectronicProductsCategory";
import OfferBannerContainer3 from "@/src/components/offers/OfferBannerContainer3";
import MenProductsCategory from "@/src/components/slidingProducts/MenProductsCategory";
import BigOfferContainer from "@/src/components/offers/BigOfferContainer";
import WomenProductsCategory from "../components/slidingProducts/WomenProductsCategory";
import MobileMenu from "@/src/components/navbar/menu/MobileMenu";

export default function Home() {
  return (
    <div>
        <LifeStyleCollection/>
        <Features/>
        <CategoryContainer/>
        <DealsOfDay/>
        <OfferBannerContainer2/>
        <ElectronicProductsCategory/>
        <OfferBannerContainer3/>
        <MenProductsCategory/>
        <BigOfferContainer/>
        <WomenProductsCategory/>
        <MobileMenu/>
    </div>
  )
}
