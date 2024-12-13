import CartCounter from "@/shopping-cart/components/CartCounter";




export const metadata = {
  title: "Counter Page",
  description: "Simple contador",
};

export default function CounterPage() {


  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-800">
      <span className="text-green-900">Products in the basket</span>
    <CartCounter value={ 100 }/>
    </div>
  );
}
