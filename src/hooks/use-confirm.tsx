import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/responsive-dialog";

export const useConfirm = (title: string, description: string): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };

  const handelClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handelClose();
  };
  const handleCancel = () => {
    promise?.resolve(false);
    handelClose();
  };

  const ConfirmationDialog = () => (
    <ResponsiveDialog open={promise != null} onOpenChange={handelClose} title={title} description={description}>
      <div className="pt-4 w-full flex flex-col-reverse gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
        <Button onClick={handleCancel} variant="outline" className="w-full lg:w-auto">
          Cancel
        </Button>
        <Button onClick={handleConfirm} className="w-full lg:w-auto">
          Confirm
        </Button>
      </div>
    </ResponsiveDialog>
  );
  return [ConfirmationDialog, confirm];
};
