'use client'
import { Input } from "@/components/input"
import { CardHeader } from '@/components/ui/card'
import {useState } from "react"
import { Button } from "@/components/ui/button";
import {Send} from "lucide-react"

export default function Header() {
    const [url,seturl] = useState("");
    function handleSendMessage(){
        throw new Error("Function not implemented.");
    }

  return (
    <CardHeader className="dark bg-black border-2 border-white rounded-xl">
      <div className="w-full mx-[auto] space-x-2 grid grid-cols-4 grid-rows-1 my-2">
          <Input
            value={url}
            onChange={(e) => seturl(e.target.value)}
            placeholder="add your url"
            className="col-span-3 flex-1"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4 mr-2" /> Send
          </Button>
        </div>
      </CardHeader>
  )
}
