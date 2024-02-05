import { CardPrice } from "@/widgets";
import { plans } from "@/data";

function Prices() {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center">
      <div className="w-full">
        {plans.map((plan, index) => (
          <div key={index}>
            <h3 className="text-4xl py-5 font-semibold text-deep-purple-500">
              {plan.title_section}
            </h3>
            <div className="grid w-full justify-items-center gap-5 md:gap-0 grid-cols-1 lg:grid-cols-3 text-center">
              {plan.items.map((item, itemIndex) => (
                <CardPrice key={itemIndex} number={plan.number} title={item.title} price={item.price} dollar={item.dollar} items={item.items} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prices;
