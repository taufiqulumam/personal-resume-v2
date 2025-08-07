import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()}<span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>Muhammad Taufiqul Umam.</span>All rights reserved.
          </div>
          {/* <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Taufiqul Umam. All rights reserved.
          </div> */}
        </div>
      </div>
    </footer>
  )
}
