import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PracticePlayer from "@/components/PracticePlayer";
import { practiceService } from "@/services/practice.service";

export default function Home() {
  const practices = practiceService.getAll();
  const practiceContexts = practiceService.getContexts();

  return (
    <main className="min-h-screen bg-[#f7f1e8] px-4 py-4 text-[#2f2a24] sm:px-5 sm:py-6">
      <div className="mx-auto max-w-4xl">
        <Header />
        <PracticePlayer
          practices={practices}
          practiceContexts={practiceContexts}
        />
        <Footer />
      </div>
    </main>
  );
}
