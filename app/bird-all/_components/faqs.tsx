import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="flex-col flex items-center justify-center pt-20">
        <div className="text-4xl font-medium pb-10">
            FAQS
        </div>
        <Accordion type="single" collapsible className="md:w-2/3 w-full px-10 md:px-0">
      <AccordionItem value="item-1" className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c] ">
        <AccordionTrigger className="font-medium">How do I purchase Loom?</AccordionTrigger>
        <AccordionContent>
           It is possible to purchase bird. Click here to learn more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c] ">
        <AccordionTrigger className="font-medium">How do I purchase Loom?</AccordionTrigger>
        <AccordionContent>
           It is possible to purchase bird. Click here to learn more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]">
        <AccordionTrigger className="font-medium">How do I purchase Loom?</AccordionTrigger>
        <AccordionContent>
           It is possible to purchase bird. Click here to learn more.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]">
        <AccordionTrigger className="font-medium">How do I purchase Loom?</AccordionTrigger>
        <AccordionContent>
           It is possible to purchase bird. Click here to learn more.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]">
        <AccordionTrigger className="font-medium">How do I purchase Loom?</AccordionTrigger>
        <AccordionContent>
           It is possible to purchase bird. Click here to learn more.
        </AccordionContent>
      </AccordionItem>
     
    </Accordion>
        
    </div>
  )
}

export default Faqs