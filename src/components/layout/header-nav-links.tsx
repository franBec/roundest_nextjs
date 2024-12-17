import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface NavLinksProps {
  navLinks: { href: string; label: string }[];
  pathname: string;
  mobile?: boolean;
}

export const HeaderNavLinks: FC<NavLinksProps> = ({
  navLinks,
  pathname,
  mobile = false,
}) => (
  <>
    {navLinks.map(link => (
      <Button
        key={link.href}
        asChild
        variant="link"
        className={`${
          !pathname.startsWith(link.href) && "text-muted-foreground"
        } ${mobile ? "w-full justify-start" : ""}`}
      >
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ))}
  </>
);
