import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Filter() {
  return (
    <div className="p-[20px] bg-[#F5F7FF]">
      <h3 className="text-[16px] font-bold text-center">Filters</h3>
      <button className="w-[200px] text-[14px] cursor-pointer font-semibold text-[#A2A6B0]/50 hover:text-[#A2A6B0] h-[37px] rounded-full border-3 mt-2 border-[#A2A6B0]">
        Clear Filter
      </button>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-[14px] cursor-pointer font-semibold">
            <p>Category</p>
          </AccordionTrigger>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>CUSTOM PCS</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>MSI ALL-IN-ONE PCS</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>HP/COMPAQ PCS</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[14px] cursor-pointer font-semibold">
            <p>Price</p>
          </AccordionTrigger>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$0.00 - $1,000.00</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$1,000.00 - $2,000.00</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$4,000.00 - $5,000.00</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$4,000.00 - $5,000.00</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$4,000.00 - $5,000.00</p>
          </AccordionContent>
          <AccordionContent className="text-[13px] cursor-pointer ">
            <p>$7,000.00 And Above</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[14px] cursor-pointer font-semibold">
            <p>Color</p>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2 mt-1 cursor-pointer">
            <p className="size-[27px] rounded-full bg-black"></p>
            <p className="size-[27px] rounded-full bg-red-500 outline-3 border-1 outline-blue-700"></p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <button className="w-[200px] h-[37px] text-white rounded-full mt-3 text-[14px] cursor-pointer font-semibold bg-[#0156FF]/80 hover:bg-[#0156FF] ">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
