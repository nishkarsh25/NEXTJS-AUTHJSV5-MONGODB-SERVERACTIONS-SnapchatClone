import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdEmojiEmotions } from "react-icons/md";
import { EmojiArray } from "@/lib/emoji";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { readFileAsDataURL } from "@/lib/utils";
import { sendSnapMessage } from "@/lib/serveractions";
import { Loader2 } from "lucide-react";

export function EmojiPopover() {
  const [loading, setLoading] = useState(false);
  const popoverRef = useRef<HTMLButtonElement>(null);
  const params = useParams<{ id: string }>();
  const id = params.id;
  const handleSendEmoji = async (srcUrl: string) => {
    setLoading(true);
    try {
      const blob = await fetch(srcUrl).then((res) => res.blob());
      const dataUrl = await readFileAsDataURL(blob);
      await sendSnapMessage(dataUrl, id, "image");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  
}
