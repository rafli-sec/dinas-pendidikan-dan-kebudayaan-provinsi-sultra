import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: "/", label: "Beranda" },
    {
      label: "Profil",
      subItems: [
        { href: "/profil/sejarah", label: "Sejarah" },
        { href: "/profil/visi-misi", label: "Visi Misi" },
        { href: "/profil/tugas-fungsi", label: "Tugas Pokok & Fungsi" },
        { href: "/profil/struktur-organisasi", label: "Struktur Organisasi" },
      ],
    },
    {
      label: "Pelayanan",
      subItems: [
        { href: "/pelayanan/visi-misi", label: "Visi Misi Pelayanan" },
        { href: "/pelayanan/motto", label: "Motto Pelayanan" },
        { href: "/pelayanan/pinjam-ruang", label: "Pinjam Ruang & Agenda" },
        { href: "/pelayanan/sop", label: "Standar Operasional Prosedur" },
        { href: "/pelayanan/sarana-prasarana", label: "Sarana Prasarana" },
        { href: "/pelayanan/standar-pelayanan", label: "Standar Pelayanan Publik" },
        { href: "/pelayanan/pengaduan", label: "Pengaduan" },
        { href: "/pelayanan/prestasi", label: "Prestasi Kinerja Layanan" },
        { href: "/pelayanan/klinik", label: "Klinik Pendidikan" },
      ],
    },
    { href: "/ppid", label: "PPID" },
    {
      label: "Galeri",
      subItems: [
        { href: "/galeri/foto", label: "Foto" },
        { href: "/galeri/video", label: "Video" },
      ],
    },
  ];

  return (
    <nav className="bg-card shadow-soft border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-government-blue">
                Dinas Pendidikan
              </h1>
              <p className="text-sm text-muted-foreground">Sulawesi Tenggara</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-1 text-foreground hover:text-government-blue hover:bg-muted/50"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted cursor-pointer"
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-government-blue bg-muted"
                        : "text-foreground hover:text-government-blue hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-foreground">
                        {item.label}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-government-blue"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.href)
                          ? "text-government-blue bg-muted"
                          : "text-foreground hover:text-government-blue"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;