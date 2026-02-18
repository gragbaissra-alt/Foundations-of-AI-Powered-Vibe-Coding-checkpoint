import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-6 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground tracking-wide">
          Welcome
        </div>
       <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-foreground leading-tight mb-8">
  Issra Gragba
</h1>

<p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
  Business Student & Creative Developer
</p>
        <Button size="lg" className="rounded-full px-8 py-6 text-base gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
          View My Projects
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
