import CartCounter from "@/shopping-cart/components/CartCounter";




export const metadata = {
  title: "Counter Page",
  description: "Simple contador",
};

export default function CounterPage() {


  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Productos en la cesta</span>
    <CartCounter value={ 100 }/>
    </div>
  );
}
