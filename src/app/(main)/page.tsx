import Navbar from "components/blocks/Navbar"
import HeroSection from "components/blocks/HeroSection"
import StatsSection from "components/blocks/StatsSection"
import MissionSection from "components/blocks/MissionSection"
import PillarsSection from "components/blocks/PillarsSection"
import PipelineSection from "components/blocks/PipelineSection"
import VideoSection from "components/blocks/VideoSection"
import VisionSection from "components/blocks/VisionSection"
import PartnersSection from "components/blocks/PartnersSection"
import NewsSection from "components/blocks/NewsSection"
import Footer from "components/blocks/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <MissionSection />
      <StatsSection />
      <PartnersSection />
      <PillarsSection />
      <PipelineSection />
      <VideoSection />
      <NewsSection />
      <Footer />
    </div>
  )
}
