import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TugasFungsi = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-government-blue mb-4">Tugas Pokok & Fungsi</h1>
            <p className="text-muted-foreground text-lg">Peran dan Tanggung Jawab Dinas Pendidikan</p>
          </div>

          <Tabs defaultValue="tugas" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tugas">Tugas Pokok</TabsTrigger>
              <TabsTrigger value="fungsi">Fungsi</TabsTrigger>
            </TabsList>

            <TabsContent value="tugas">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-government-blue">
                    <span className="text-2xl">📋</span>
                    Tugas Pokok Dinas Pendidikan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Perumusan Kebijakan",
                        items: [
                          "Merumuskan kebijakan teknis pendidikan",
                          "Menyusun rencana strategis pendidikan",
                          "Mengembangkan standar pendidikan"
                        ]
                      },
                      {
                        title: "Pelaksanaan Program",
                        items: [
                          "Melaksanakan program pendidikan dasar dan menengah",
                          "Menyelenggarakan pendidikan non formal",
                          "Mengkoordinasikan program pendidikan"
                        ]
                      },
                      {
                        title: "Pembinaan dan Pengawasan",
                        items: [
                          "Melakukan pembinaan satuan pendidikan",
                          "Mengawasi pelaksanaan standar pendidikan",
                          "Mengevaluasi kinerja pendidikan"
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} className="border-l-4 border-government-blue pl-6">
                        <h3 className="text-xl font-semibold text-government-blue mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-education-green mt-1">•</span>
                              <span className="text-muted-foreground">[Template - {item}]</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fungsi">
              <div className="grid gap-6">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-government-blue">
                      <span className="text-2xl">⚙️</span>
                      Fungsi Utama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: "🎓",
                          title: "Pendidikan Formal",
                          functions: [
                            "Pengelolaan pendidikan dasar",
                            "Pembinaan pendidikan menengah",
                            "Pengembangan kurikulum"
                          ]
                        },
                        {
                          icon: "📚",
                          title: "Pendidikan Non Formal",
                          functions: [
                            "Program keaksaraan",
                            "Pendidikan keterampilan",
                            "Pendidikan kesetaraan"
                          ]
                        },
                        {
                          icon: "👨‍🏫",
                          title: "Tenaga Pendidik",
                          functions: [
                            "Pengembangan kompetensi guru",
                            "Sertifikasi pendidik",
                            "Penilaian kinerja guru"
                          ]
                        },
                        {
                          icon: "🏫",
                          title: "Sarana Prasarana",
                          functions: [
                            "Pembangunan gedung sekolah",
                            "Pengadaan peralatan",
                            "Pemeliharaan fasilitas"
                          ]
                        }
                      ].map((item, index) => (
                        <Card key={index} className="bg-gradient-primary/5">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <span className="text-2xl">{item.icon}</span>
                              {item.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {item.functions.map((func, funcIndex) => (
                                <li key={funcIndex} className="flex items-start gap-2">
                                  <span className="text-education-green mt-1">•</span>
                                  <span className="text-sm text-muted-foreground">[Template - {func}]</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TugasFungsi;