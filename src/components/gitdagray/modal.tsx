//https://github.com/gitdagray/nextjs-modal-intercepting-routes/blob/main/src/components/Modal.tsx

"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { ReactNode } from "react";

export default function Modal({ children }: Readonly<{ children: ReactNode }>) {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
