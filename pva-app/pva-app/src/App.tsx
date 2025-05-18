import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Imports for Sonner toast
import { Toaster as SonnerToaster } from "@/components/ui/sonner" // shadcn/ui places the Toaster component here
import { toast as sonnerToast } from "sonner" // The actual toast function from the sonner library

function App(): JSX.Element {
  const handleShowToast = () => {
    // Example of a simple Sonner toast
    sonnerToast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo action triggered!"),
      },
      // You can add more options like `duration`, `position`, etc.
      // Or different types of toasts:
      // sonnerToast.success("Successfully saved!")
      // sonnerToast.error("Failed to save.")
      // sonnerToast.info("This is an informational message.")
      // sonnerToast.warning("Warning: something needs attention.")
    });
  };

  return (
    <> {/* Fragment needed to have SonnerToaster as a sibling */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900 p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">PVA App</CardTitle>
            <CardDescription>shadcn/ui with Sonner Toasts!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <Button
              className="w-full"
              onClick={handleShowToast}
            >
              Show Sonner Toast
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sonner Toaster Component */}
      {/* You can customize its position, theme, etc. */}
      {/* Common props: richColors, theme, position, closeButton, expand, visibleToasts */}
      <SonnerToaster richColors position="top-right" />
    </>
  )
}

export default App