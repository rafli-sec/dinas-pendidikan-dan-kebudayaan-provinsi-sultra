import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-blue/5 to-education-green/5 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-government-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
            Silakan periksa kembali URL atau kembali ke halaman utama.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Halaman Sebelumnya
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Butuh bantuan? Hubungi kami di{" "}
            <a 
              href="mailto:info@disdik.sultraprov.go.id" 
              className="text-government-blue hover:underline"
            >
              info@disdik.sultraprov.go.id
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;