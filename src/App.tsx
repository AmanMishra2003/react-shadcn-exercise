// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import { Button } from "@/components/ui/button"

interface FormData{
  title : string,
  content : string
}

const accordionDataDemo:FormData[] = [
  {
    title: "Section 1: Introduction",
    content: "This section provides an introduction to the topic. You can include basic information here."
  },
  {
    title: "Section 2: Features",
    content: "This section outlines the key features. For example, feature 1 does this, and feature 2 does that."
  },
  {
    title: "Section 3: Benefits",
    content: "This section describes the benefits. You can highlight why this topic is useful or important."
  },
  {
    title: "Section 4: Conclusion",
    content: "This section wraps up the content. Summarize the key points discussed in the previous sections."
  }
];

export default function App() {
  const [accordionData, setAccordionData] = useState<FormData[]>(accordionDataDemo)

  const addNewItem = (data:FormData) =>{
    setAccordionData(currData=>(
      [
        ...currData,
        {
          ...data
        }
      ]
    ))
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="form text-white flex flex-col justify-center items-center bg-cyan-900 shadow-lg shadow-cyan-400/50 px-5 py-2 rounded-md w-3/6 mb-5">
        <Form add={addNewItem}/>
      </div>

      {/* <div className="w-50%"> */}
      <Accordion type="single" collapsible className="w-3/6 ">
      {
        accordionData.map((ele,i)=>(
          <AccordionItem value={"value"+(i+1)} className="bg-slate-200 px-4 my-2" key={ele.title}  >
                  <AccordionTrigger >{ele.title}</AccordionTrigger>
                  <AccordionContent>
                   {ele.content}
                  </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
       
    </div>
  )
}



function Form({add}:Props){
  const [data, setData] = useState<FormData>({title:'', content:''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setData(currData=>(
      {
        ...currData,
        [name]:value
      }
    ))
  }

  function handleSubmission(e: React.FormEvent<HTMLInputElement>){
    e.preventDefault();
    if(data.title==='' || data.content==='') return;
    add(data);
    setData({title:'', content:''})
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex justify-between py-2 gap-3">
      <label htmlFor="Title">Title : </label>
      <input type="text" id="Title" name="title" value={data.title} onChange={handleChange} className="text-black px-1 py-0.5"/>
      </div>
      <div className="flex justify-between py-2 gap-3">
      <label htmlFor="content">Content: </label>
      <input type="text" id="content" name="content" value={data.content} onChange={handleChange} className="text-black px-1 py-0.5"/>
      </div>
      <Button className="w-full">
        ADD Accordian
      </Button>
    </form>
  )
}
