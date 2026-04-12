

import Commissions from "./components/Commissions/Commissions";
import EasyTrade from "./components/EasyTrade";

import FinancialProducts from "./components/FinancialProducts/FinancialProducts";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";

import InvestmentCalculator from "./components/InvestmentCalculator";
export default function Home() {
  return (
    <>
      <HeroCarousel/>
      <FinancialProducts/>
      <EasyTrade/>
      <InvestmentCalculator />
      
    </>
  );
}
