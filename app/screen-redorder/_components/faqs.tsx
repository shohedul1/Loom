import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="flex-col flex items-center justify-center pt-20 bg-[#2d308a]">
        <div className="text-4xl font-medium pb-10 text-white">
        Screen Recorder FAQs
        </div>
        <Accordion type="single" collapsible className="md:w-2/3 w-full px-10 md:px-0">
      <AccordionItem value="item-1" className="my-6 bg-[#0c0d0e] py-10 md:py-16 rounded-[40px] text-[#f8f7ff] ">
        <AccordionTrigger className="font-medium">How do I record my screen?</AccordionTrigger>
        <AccordionContent>
        Recording a screen capture with Loom is simple.
        <div className="flex flex-col pt-3">
          <div>
            01 Sign in to your Loom account, or sign up to use the free screen recorder.
          </div>
          <div>
            02 Download and install the Loom app for your platform or device.
          </div>
          <div>
            03 Open the Loom app and click Record. A small window will appear on your screen that you can move and resize as needed.
          </div>
          <div>
            04 Select whether you want to record just your screen or your entire desktop.
          </div>
          <div>
            05 Choose which microphone you want to use (if available) and then click Start Recording to begin recording your screen capture.
          </div>
          <div>
            06 When you're done, simply hit Stop Recording and the finished file will automatically upload to your Loom account.
          </div>
          <div>
            07 Want to send your Loom? The app automatically creates a link for easy sharing to any recipient or device.
          </div>

        </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="my-6 bg-[#0c0d0e] py-10 md:py-16 rounded-[40px] text-[#fcfbff] ">
        <AccordionTrigger className="font-medium">How can I screen-record a video with sound?</AccordionTrigger>
        <AccordionContent>
        Loom makes it easy to record audio and video from your local peripherals. When setting up a new recording session, simply select an audio recording device connected to your computer as the audio source for your recording session. You can even test your recording settings and quality prior to starting a Loom recording.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="my-6 bg-[#0c0d0e] py-10 md:py-16 rounded-[40px] text-[#f8f7ff] ">
        <AccordionTrigger className="font-medium">Does Loom work on Mac and Windows?</AccordionTrigger>
        <AccordionContent>
        Loom works with Mac computers (OSX 10.15 and above) and Windows 10 (64-bit) computers to give you the power of presentation on whatever device you choose. For Chrome users, Loom also offers a Chrome extension for basic features. Take advantage of the powerful features of the Loom screen recording tool from your favorite devices.
        <p className="text-xl pt-3">For Mac:</p>
        <div className="flex flex-col pt-3">
          <div>
            01 Download the Loom Desktop App for Mac.
          </div>
          <div>
            02 Record footage of either your screen, your camera, or both at once.
          </div>
          <div>
            03 Customize the size of your recording window. You can choose the entire screen, a single window, or a custom area you define.
          </div>
          <div>
            04 Wrap up recording by hitting the Stop button. Loom will instantly create a link for sharing. No need to upload, wait for rendering, or take extra steps to share your Loom.
          </div>
         

        </div>
        <p className="text-xl py-5">For Windows:</p>
        Loom offers an app for Windows 10 (64-bit) and 11 devices. Why settle with the onboard recording options in Windows when you can create professionally edited, personalized video capture with ease?
        <div className="flex flex-col py-3">
          <div>
            01 Download the Loom Desktop App for Windows.
          </div>
          <div>
            02 Click the Loom icon to open your screen recorder.
          </div>
          <div>
            03 Choose your capture settings: screen only, webcam only, or both.
          </div>
          <div>
            04 Choose recording size, whether a single window, a whole screen, or a custom capture window.
          </div>
          <div>
            05 Select Audio Capture. You can select any microphone connected to your computer.
          </div>
          <div>
            06 Record your video. Hit Stop when you&apos;ve created the perfect video for your recipient.
          </div>
        
          <div>
            07 Use the instant link Loom generates to share your recording quickly and easily with no downloads or rendering.
          </div>

        </div>
        </AccordionContent>
      </AccordionItem>
    
     
    </Accordion>
        
    </div>
  )
}

export default Faqs