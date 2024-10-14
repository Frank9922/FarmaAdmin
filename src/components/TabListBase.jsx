import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { RiAdminLine} from "@remixicon/react"
import { MyTable } from './TableUsers'
import React, { useState } from 'react'



export const TabListBase = () => {

  const [selectedView, setSelectedView ]= useState("1")

  return (
<Tabs
onValueChange={(value)=>setSelectedView(value)} 
defaultValue={selectedView} 
className='mt-3'
>
  <TabsList  variant="line" className=' space-x-2 flex-col'>
    <TabsTrigger value="1">Tab 1</TabsTrigger>
    <TabsTrigger value="2">Tab 2</TabsTrigger>
  </TabsList>
  <div className="ml-2 mt-4">
      <TabsContent
        value="1"
        className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
      >
        <p>
          TAB 1
        </p>
        <p>
          No return authorization (RMA) is required. If you are within the
          United States, a pre-paid shipping label will be generated. For direct
          returns, a flat fee of $10 is deducted from your return for shipping
          and processing costs.
        </p>
      </TabsContent>
      <TabsContent
        value="2"
        className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
      >
       <MyTable/>

      </TabsContent>
    </div>
</Tabs>
    
  )
}
