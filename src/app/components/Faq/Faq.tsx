import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/app/components/ui/accordion"

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
