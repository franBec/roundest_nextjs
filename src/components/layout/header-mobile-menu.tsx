import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { HeaderTitle } from "@/components/layout/header-title";
import { HeaderNavLinks } from "@/components/layout/header-nav-links";
import { FC } from "react";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  pathname: string;
}

export const HeaderMobileMenu: FC<MobileMenuProps> = ({
  navLinks,
  pathname,
}) => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-4 mt-4">
          <HeaderTitle />
          <HeaderNavLinks navLinks={navLinks} pathname={pathname} mobile />
        </div>
      </SheetContent>
    </Sheet>
  </div>
);
