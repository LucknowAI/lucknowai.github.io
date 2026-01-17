import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Research from "./pages/Research";
import AIBaithak from "./pages/AIBaithak";
import Resources from "./pages/Resources";
import Mentorship from "./pages/Mentorship";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import CodeOfConduct from "./pages/CodeOfConduct";
import License from "./pages/License";
import NotFound from "./pages/NotFound";

// Events
import MeetupNov2023 from "./pages/events/MeetupNov2023";
import JamieAIMeetup from "./pages/events/JamieAIMeetup";
import StartupSuccessDays from "./pages/events/StartupSuccessDays";
import ImageProcessingWebinar from "./pages/events/ImageProcessingWebinar";
import BuildTrainDeploy from "./pages/events/BuildTrainDeploy";
import GDSCWow from "./pages/events/GDSCWow";
import HackToCrack from "./pages/events/HackToCrack";
import GenAIAwadhSummit from "./pages/events/GenAIAwadhSummit";
import BuildWithAI2024 from "./pages/events/BuildWithAI2024";
import DiscordAMA from "./pages/events/DiscordAMA";
import GoogleIOExtended from "./pages/events/GoogleIOExtended";
import AIDayLucknow from "./pages/events/AIDayLucknow";
import DevFestLucknow from "./pages/events/DevFestLucknow";
import IWDLucknow from "./pages/events/IWDLucknow";
import Hack4Bihar from "./pages/events/Hack4Bihar";
import BuildWithAIBBD from "./pages/events/BuildWithAIBBD";
import BuildWithAISRMCEM from "./pages/events/BuildWithAISRMCEM";
import BuildWithAILPCPS from "./pages/events/BuildWithAILPCPS";

// Projects
// import NawabAI from "./pages/projects/NawabAI";
// import FinalYearProject from "./pages/projects/FinalYearProject";

// FAQs
import LAIFaqs from "./pages/faqs/LAIFaqs";
import CommonlyAskedQuestions from "./pages/faqs/CommonlyAskedQuestions";
import VolunteerFaqs from "./pages/faqs/VolunteerFaqs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/research" element={<Research />} />
          <Route path="/ai-baithak" element={<AIBaithak />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/license" element={<License />} />
          
          {/* Events */}
          <Route path="/events/past/26-nov-2023-meetup" element={<MeetupNov2023 />} />
          <Route path="/events/past/13-jan-2024-jamie-ai" element={<JamieAIMeetup />} />
          <Route path="/events/past/21-jan-2024-startup-success" element={<StartupSuccessDays />} />
          <Route path="/events/past/27-jan-2024-image-processing" element={<ImageProcessingWebinar />} />
          <Route path="/events/past/27-feb-2024-build-train-deploy" element={<BuildTrainDeploy />} />
          <Route path="/events/past/27-apr-2024-gdsc-wow" element={<GDSCWow />} />
          <Route path="/events/past/23-24-may-2024-hack-to-crack" element={<HackToCrack />} />
          <Route path="/events/past/25-may-2024-genai-awadh" element={<GenAIAwadhSummit />} />
          <Route path="/events/past/29-jun-2024-build-with-ai" element={<BuildWithAI2024 />} />
          <Route path="/events/past/10-aug-2024-discord-ama" element={<DiscordAMA />} />
          <Route path="/events/past/31-aug-2024-google-io-extended" element={<GoogleIOExtended />} />
          <Route path="/events/past/19-oct-2024-ai-day" element={<AIDayLucknow />} />
          <Route path="/events/past/24-nov-2024-devfest" element={<DevFestLucknow />} />
          <Route path="/events/past/08-mar-2025-iwd" element={<IWDLucknow />} />
          <Route path="/events/past/05-apr-2025-hack4bihar" element={<Hack4Bihar />} />
          <Route path="/events/past/07-apr-2025-build-with-ai-bbd" element={<BuildWithAIBBD />} />
          <Route path="/events/past/19-apr-2025-build-with-ai-srmcem" element={<BuildWithAISRMCEM />} />
          <Route path="/events/past/27-apr-2025-build-with-ai-lpcps" element={<BuildWithAILPCPS />} />
          
          {/* Projects */}
          {/* <Route path="/projects/nawab-ai" element={<NawabAI />} /> */}
          {/* <Route path="/projects/final-year-project" element={<FinalYearProject />} /> */}
          
          {/* FAQs */}
          <Route path="/faqs/lai-faqs" element={<LAIFaqs />} />
          <Route path="/faqs/common" element={<CommonlyAskedQuestions />} />
          <Route path="/faqs/volunteer" element={<VolunteerFaqs />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
