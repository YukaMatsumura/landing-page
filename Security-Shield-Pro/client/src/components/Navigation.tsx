import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 font-bold text-xl md:text-2xl text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="link-logo"
        >
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
          <span>SecurityCheck</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("problem")} className="text-foreground/80 hover:text-primary font-medium transition-colors" data-testid="nav-problem">
            従来の課題
          </button>
          <button onClick={() => scrollToSection("service")} className="text-foreground/80 hover:text-primary font-medium transition-colors" data-testid="nav-service">
            サービスの特長
          </button>
          <button onClick={() => scrollToSection("process")} className="text-foreground/80 hover:text-primary font-medium transition-colors" data-testid="nav-process">
            診断プロセス
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-foreground/80 hover:text-primary font-medium transition-colors" data-testid="nav-faq">
            よくある質問
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
            data-testid="nav-contact-button"
          >
            無料診断を申し込む
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl py-4 px-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection("problem")} className="text-left py-2 border-b" data-testid="nav-mobile-problem">
            従来の課題
          </button>
          <button onClick={() => scrollToSection("service")} className="text-left py-2 border-b" data-testid="nav-mobile-service">
            サービスの特長
          </button>
          <button onClick={() => scrollToSection("process")} className="text-left py-2 border-b" data-testid="nav-mobile-process">
            診断プロセス
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-left py-2 border-b" data-testid="nav-mobile-faq">
            よくある質問
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700 w-full"
            data-testid="nav-mobile-contact-button"
          >
            無料診断を申し込む
          </Button>
        </div>
      )}
    </nav>
  );
}
