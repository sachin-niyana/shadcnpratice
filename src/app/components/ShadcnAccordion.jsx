import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionList } from "./common/Helper";

const ShadcnAccordion = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[1200px] overflow-hidden"
          defaultValue="item-0"
        >
          {AccordionList.map((obj, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{obj.title}</AccordionTrigger>
              {obj.description.map((value, index) => (
                <AccordionContent key={index}>{value}</AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ShadcnAccordion;
