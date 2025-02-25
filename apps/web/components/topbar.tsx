import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@ui/components/ui/menubar";
import {
  BookImage,
  CaseSensitive,
  Circle,
  Diamond,
  Eraser,
  Hand,
  LockKeyhole,
  Minus,
  MousePointer,
  MoveRight,
  Pencil,
  Square,
} from "lucide-react";

export function TopBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <LockKeyhole  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Hand  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <MousePointer  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Square  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Diamond  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Circle  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <MoveRight  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Minus  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Pencil  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <CaseSensitive  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <BookImage  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Eraser  className="w-12 h-6"/>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
